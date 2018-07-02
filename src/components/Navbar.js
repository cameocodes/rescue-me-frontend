import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pets from "../pages/Pets";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";

const Navbar = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pets">Pets</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
  
        <hr/>
  
        <Route exact path="/" component={Home}/>
        <Route path="/pets" component={Pets}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
      </div>
    </Router>
  )
  export default Navbar;