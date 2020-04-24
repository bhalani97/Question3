import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Register from './containers/Register'
import User from './containers/User'
import './App.css';
import './bootstrap.css'

class App extends Component {
 
  render() {
   

   
        return (
      <div className="App">
    <Router>
      <Switch>
          <Route path="/" exact component={Register}></Route>
          <Route path="/register"component={Register}></Route>
          <Route path="/user"component={User}></Route>
      </Switch>
    </Router>
          
      
      </div>
    );
  }
}

export default App;
