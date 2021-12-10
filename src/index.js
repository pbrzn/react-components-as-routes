import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Login from "./Login.js";
import Navbar from "./Navbar.js";

ReactDOM.render(
  <Router>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
  </Router>,
  document.getElementById('root')
);
