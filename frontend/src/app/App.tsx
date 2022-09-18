import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import '../css/App.css';
import Routes from "./Routes";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Routes/>
                </header>
            </div>
        </Router>
    );
}

export default App;
