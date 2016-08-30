import React, { Component } from "react"
import { Link } from "react-router"
import firebase from "firebase"
import firebaseUtils from './utilities/firebaseUtils'
import Comment from './Comment'


class Signin extends Component {
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
                
             <Link to="/">Home</Link>
             <Link to="/signup">Sign Up</Link>
              <h3>SignIn</h3> Boo<br/>
                 <ul>
               <li>Email:    <input onChange={(e) => this.setState({email: e.target.value})}/></li>
               <li>Password: <input onChange={(e) => this.setState({password: e.target.value})}/></li>
                 </ul>
                             <button onClick={(event) => this.logIn(event)}><Link to="/comment">Submit</Link></button>
                             <button onClick={(event) => this.logOut(event)}><Link to="/">SignOut</Link></button>

            </div>
        )
    }
}

export default Signin