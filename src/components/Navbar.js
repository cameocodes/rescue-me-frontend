import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pets from "../pages/Pets";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Pet from "../pages/Pet";
import './navbar.css'

const Navbar = () => (
    <Router>
      <div className="navbar">
        <div className="navlinks">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/pets">Pets</Link></p>
          <p><Link to="/login">Login</Link></p>
          <p><Link to="/register">Register</Link></p>
        </div>
  
        <hr/>
        <div className="rendered">
          <Route exact path="/" component={Home}/>
          <Route exact path="/pets" component={Pets}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register} />
          <Route path="/pets/:id" component={Pet} />
        </div>
      </div>
    </Router>
  )
  export default Navbar;