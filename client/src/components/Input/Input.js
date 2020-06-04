import React from "react";
import "./Input.css";

function Input({ message, setMessage, sendMessage }) {
    return (
        <form className="send-message-form uk-flex">
            <div className="uk-width-expand uk-margin-small-right">
                <input
                    className="uk-input"
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyPress={e => e.key === "Enter" ? sendMessage(e) : null}
                />
            </div>
            <button className="uk-button uk-button-primary" type="submit" onClick={e => sendMessage(e)}>Send</button>
        </form>
    );
}

export default Input;