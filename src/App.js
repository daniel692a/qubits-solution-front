import React from "react";
import Home from './pages/Home';
import Header from './components/Header';
import Signup from './pages/Signup';
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/signup'>
                    <Signup />
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
