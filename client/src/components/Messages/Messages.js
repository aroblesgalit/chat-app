import React from "react";
import "./Messages.css";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";

function Messages({ messages, name }) {
    return (
        <ScrollToBottom>
            <div className="messages-container">
                {
                    messages.map((message, i) => {
                        return <div key={i}>
                            <Message message={message} name={name} />
                        </div>
                    })
                }
            </div>
        </ScrollToBottom>
    );
}

export default Messages;