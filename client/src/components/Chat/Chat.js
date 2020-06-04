import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import queryString from "query-string"; // Allows to use queries from the url
import io from "socket.io-client"; 

// Create empty variable
let socket;

function Chat() {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const ENDPOINT = "localhost:5000";

    const { roomname, username } = useParams();

    useEffect(() => {
        // After first connection, setup socket to our endpoint
        socket = io(ENDPOINT);

        setName(username);
        setRoom(roomname)

        socket.emit("join", { name: username, room: roomname });
    }, [ENDPOINT, roomname, username]);

    return (
        <h1>Chat</h1>
    );
}

export default Chat;