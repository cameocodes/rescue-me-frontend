import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pets from "./pages/Pets";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Pet from "./pages/Pet";
import Header from "./components/Header";
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
          <Navbar routes={[
            { 
              pathName: 'Home', 
              uri: '/' 
            },{ 
              pathName: 'Pets', 
              uri: '/pets' 
            },{ 
              pathName: 'Login', 
              uri: '/login' 
            },{ 
              pathName: 'Register', 
              uri: '/register' 
            },
          ]} />
          < Header />
          <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pets" component={Pets} />
            <Route path="/login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/pets/:_id" component={Pet} />
          </Switch>
          </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
