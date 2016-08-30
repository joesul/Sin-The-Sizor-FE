import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Profile from './components/Profile';
import Game from './components/Game'
import './stylesheets/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/profile" component={Profile} />
    <Route path="/game" component={Game} />
  </Router>,
  document.getElementById('root')
);
