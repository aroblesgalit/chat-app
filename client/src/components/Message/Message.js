import React from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";

function Message({ message: { user, text }, name }) {

    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        <div className={ isSentByCurrentUser ? "uk-flex uk-flex-right uk-margin-small-bottom" : "uk-flex uk-flex-left uk-margin-small-bottom"}>

            {
                isSentByCurrentUser ? (
                    <div className="message-box uk-flex uk-flex-column uk-text-right">
                        <p className="uk-margin-small-bottom">{trimmedName}</p>
                        <div className="uk-background-primary uk-padding">
                            <p className="uk-light uk-margin-remove">{ReactEmoji.emojify(text)}</p>
                        </div>
                    </div>
                ) : (
                        <div className="message-box uk-flex uk-flex-column">
                            <p className="uk-margin-small-bottom">{user}</p>
                            <div className="uk-background-muted uk-padding">
                                <p className="uk-dark uk-margin-remove">{ReactEmoji.emojify(text)}</p>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

export default Message;