/**
 * Created by krival on 8/13/16.
 */
import React, { Component } from "react"
import { Link } from "react-router"
import firebaseUtils from './utilities/firebaseUtils'
import Helpers from './utilities/Helpers'

class Comment extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment: ""
        }
    }
    handleClick(event){
        let uid = localStorage.getItem("uid")
        console.log("this is", uid)
        Helpers.saveOne(uid).then((res)=>{
            console.log(res)
        })
    }
    
    render(){
        return(
            <div>
                <textarea onChange={e => this.setState({comment: e.target.value})}/>
                        <h1>Write a Comment</h1>
                <button onClick={e => this.handleClick((event))}>Send Comment</button>
            </div>
        )
    }
}

export default Comment