import React, { Component } from 'react';
import { Link } from 'react-router';
import firebaseUtils from '../utilities/firebaseUtils';
import '../stylesheets/Login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
        email: "",
        password: ""
     }
    }

    logOut(event) {
        console.log("peace");
        firebaseUtils.SignOut(event);
        console.log("Signed out")
    }

    logIn(event, email, pw){
        console.log("sup boo");
        firebaseUtils.SignIn(this.state.email, this.state.password)
        console.log("Logged in!!", this.state.email, "logged", this.state.password, "also logged")
    }

    render(){
        return(
            <div>
            <h3>SignIn</h3> Boo<br/>
             <ul>
              <li>Email:    <input onChange={(e) => this.setState({email: e.target.value})}/></li>
              <li>Password: <input onChange={(e) => this.setState({password: e.target.value})}/></li>
             </ul>
             <button onClick={(event) => this.logIn(event)}><Link to="/profile">Submit</Link></button>
             <button onClick={(event) => this.logOut(event)}><Link to="/">SignOut</Link></button>
            </div>
          )
    }
}

export default Login
