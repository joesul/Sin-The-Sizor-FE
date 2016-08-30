import React, {Component} from 'react';
import { Link } from "react-router"
import firebaseUtils from './utilities/firebaseUtils';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: " ",
            pw: " ",
            userName: "",
            dob: "",
            firstName: "",
            lastName: "",
            phone: 0
        }
    }
    makeUser(event, email, pw, obj) {
        console.log("hi!");
        firebaseUtils.SignUp(this.state.email, this.state.pw, this.state);
        console.log("email : ", this.state.email, "password : ", this.state.pw);
    }

    logOut(event) {
        console.log("peace");
        firebaseUtils.SignOut(event);
        console.log("Signed out")
    }


    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/signin">Sign In</Link>
                <h1>SIGN UP</h1>
                <ul>
               <li> Email:       <input onChange={e => this.setState({email: e.target.value})}/> </li>
               <li> Password:    <input onChange={e => this.setState({pw: e.target.value})}/> </li>
               <li> Username:    <input onChange={e => this.setState({userName: e.target.value})}/> </li>
               <li> First Name:  <input onChange={e => this.setState({firstName: e.target.value})}/></li>
               <li> Last Name:   <input onChange={e => this.setState({lastName: e.target.value})}/></li>
               <li> Phone Number:<input onChange={e => this.setState({phone: e.target.value})}/></li>
                </ul>
                <button onClick={(event) => this.makeUser(event)}>Lets Make Me!</button>

            </div>


        )
    }


}//closing Components

export default SignUp;
