import React from "react";
import Home from './pages/Home';
import Register from './pages/Register';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from "./pages/Sigin";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/signup'>
                    <Register />
                </Route>
                <Route path='/signin'>
                    <Signin />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
