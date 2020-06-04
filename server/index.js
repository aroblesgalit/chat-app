// Require all necessary dependencies
const express = require("express");
const socketio = require("socket.io");
const http = require("http"); // Built-in module

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
        socket.broadcast.to(user.room).emit("message", { user: "admin", text: `${user.name} has joined!` });

        socket.join(user.room);

        cb();
    });

    socket.on("sendMessage", (message, cb) => {
        const user = getUser(socket.id);

        io.to(user.room).emit("message", { user: user.name, text: message });

        cb();
    });

    // Implement disconnect
    socket.on("disconnect", () => {
        console.log("User had left!!!");
    });
});

// Call router as middleware
app.use(router);

// Run our server 
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));