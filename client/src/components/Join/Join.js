import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

function Join() {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className="join-container uk-padding uk-child-width-1-1 uk-child-width-1-2@s uk-flex uk-flex-center uk-background-muted">
            <form className="join-form uk-background-default uk-padding uk-box-shadow-medium uk-flex uk-flex-column uk-flex-middle">
                <h1>Join</h1>
                <div className="uk-margin uk-width-expand">
                    <input className="uk-input" placeholder="room name" type="text" onChange={e => setRoom(e.target.value)} />
                </div>
                <div className="uk-margin-bottom uk-width-expand">
                    <input className="uk-input" placeholder="your name" type="text" onChange={e => setName(e.target.value)} />
                </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat/${room}/${name}`}>
                    <button className="uk-button uk-button-primary" type="submit">Sign in</button>
                </Link>
            </form>
        </div>
    );
}

export default Join;