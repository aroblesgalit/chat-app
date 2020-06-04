import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import queryString from "query-string"; // Allows to use queries from the url
import io from "socket.io-client"; 

function Chat() {

    const { room, user } = useParams();

    useEffect(() => {
        
        console.log(room, user)
    });

    return (
        <h1>Chat</h1>
    );
}

export default Chat;