import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./components/Join/Join"
import Chat from "./components/Chat/Chat";

function App() {
    return (
        <Router>
            <Route path="/" exact>
                <Join />
            </Route>
            <Route path="/chat/:roomname/:username">
                <Chat />
            </Route>
        </Router>
    );
}

export default App;