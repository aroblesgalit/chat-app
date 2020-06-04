// Require all necessary dependencies
const express = require("express");
const socketio = require("socket.io");
const http = require("http"); // Built-in module
const cors = require("cors");

// Import helpfer functions
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

// Specify our port
const PORT = process.env.PORT || 5000;

// Require router
const router = require("./router");

// Set up socket.io
const app = express(); // Runs our app
const server = http.createServer(app); // Initialize our server and pass in our app
const io = socketio(server); // Create io, an instance of socketio and pass in our server

// Integrate io
io.on("connection", (socket) => {
    socket.on("join", ({ name, room }, cb) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if(error) return cb(error);

        socket.emit("message", { user: "admin", text: `${user.name}, welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit("message", { user: "admin", text: `${user.name} has entered the chat!` });

        socket.join(user.room);

        io.to(user.room).emit("roomData", { room: user.room , users: getUsersInRoom(user.room)});

        cb();
    });

    socket.on("sendMessage", (message, cb) => {
        const user = getUser(socket.id);

        io.to(user.room).emit("message", { user: user.name, text: message });
        io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room)});

        cb();
    });

    // Implement disconnect
    socket.on("disconnect", () => {
        const user = removeUser(socket.id);

        if(user) {
            io.to(user.room).emit("message", { user: "admin", text: `${user.name} has left the chat.` });
        }
    });
});

// Call router as middleware
app.use(router);
app.use(cors);

// Run our server 
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));