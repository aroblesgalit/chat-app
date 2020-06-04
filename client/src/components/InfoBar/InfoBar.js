import React from "react";
import "./InfoBar.css";
import { Link } from "react-router-dom";

function InfoBar({ room }) {
    return (
        <div className="infobar-container uk-flex uk-flex-between uk-flex-middle">
            <div className="uk-flex uk-flex-middle">
                <span className="uk-margin-small-right" uk-icon="world"></span>
                <h3>{room}</h3>
            </div>
            <div>
                <Link to="/"><span uk-icon="close"></span></Link>
            </div>
        </div>
    );
}

export default InfoBar;