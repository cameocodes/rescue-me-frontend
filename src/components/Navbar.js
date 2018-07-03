import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pets from "../pages/Pets";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Pet from "../pages/Pet";

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
        <Route exact path="/pets" component={Pets}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/pets/:id" component={Pet} />
      </div>
    </Router>
  )
  export default Navbar;