import React, { Component } from 'react';
import { Link } from 'react-router';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SIN THE SIZOR</h1><br/>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default App;
