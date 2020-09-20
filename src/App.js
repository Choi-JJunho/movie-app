import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
    return (
        // Link를 사용하게 될 경우 Router내에 넣어줘야만 한다.
        <HashRouter>
            <Navigation/>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/about" component={About}/>
        </HashRouter>
    );
}

export default App;