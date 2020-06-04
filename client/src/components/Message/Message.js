import React from "react";
import "./Message.css";

function Message({ message: { user, text }, name }) {

    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        <div>

            {
                isSentByCurrentUser ? (
                    <div className="uk-flex uk-flex-column uk-flex-right">
                        <p>{trimmedName}</p>
                        <div className="uk-background-primary uk-padding">
                            <p className="uk-light">{text}</p>
                        </div>
                    </div>
                ) : (
                        <div className="uk-flex uk-flex-column uk-flex-left">
                            <p>{user}</p>
                            <div className="uk-background-muted uk-padding">
                                <p className="uk-dark">{text}</p>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

export default Message;