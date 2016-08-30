import React, { Component } from 'react'
import { Link } from "react-router"
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Hi Boo</h1>
          How will you be Awesome Today!
        <br/>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>

      </div>
    );
  }
}

export default App;
