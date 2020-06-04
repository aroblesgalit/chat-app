import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {
    return (
        <Router>
            <Route path="/" exact>
                <Join />
            </Route>
            <Route path="/chat">
                <Chat />
            </Route>
        </Router>
    );
}

export default App;