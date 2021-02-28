import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import "./App.css"


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={SearchBooks} />
                    <Route exact path="/saved" component={SavedBooks} />
                    <Route exact path="/saved/:id" component={SavedBooks} />
                    <Route component={NoMatch} /> 
                </Switch>
            </div>
        </Router>
    );
}

export default App;