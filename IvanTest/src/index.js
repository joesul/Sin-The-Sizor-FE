import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from "react-router"
import App from './App';
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Comment from "./Comment"
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/signin" component={SignIn} />
      <Route path="/comment" component={Comment}/>

      </Router>,
  document.getElementById('root')
);
