import React from "react";
import "./Messages.css";
import ScrollToBottom from "react-scroll-to-bottom";

function Messages({ messages }) {
    return (
        <ScrollToBottom>
            {
                messages.map((message, i) => {
                    <div key={i}>
                        <Message message={message} name={name} />
                    </div>
                })
            }
        </ScrollToBottom>
    );
}

export default Messages;