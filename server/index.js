// Require all necessary dependencies
const express = require("express");
const socketio = require("socket.io");
const http = require("http"); // Built-in module

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
    console.log("We have a new connection!!!");
    // Implement disconnect
    socket.on("disconnect", () => {
        console.log("User had left!!!");
    });
});

// Call router as middleware
app.use(router);

// Run our server 
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));