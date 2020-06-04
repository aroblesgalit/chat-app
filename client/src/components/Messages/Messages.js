import React from "react";
import "./Messages.css";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";

function Messages({ messages, name }) {
    return (
        <ScrollToBottom>
            {
                messages.map((message, i) => {
                    return <div key={i}>
                        <Message message={message} name={name} />
                    </div>
                })
            }
        </ScrollToBottom>
    );
}

export default Messages;