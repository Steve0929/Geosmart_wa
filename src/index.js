import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// views
import Login from './views/LoginPage';
import Signup from './views/SignupPage';
import Games from  './views/Games';
import Questions from  './views/Questions';
import Mapgame from './views/Mapgame'
// redux store
import store from  './redux/store'

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/games" component={Games} />
        <Route path="/play/map" component={Mapgame} />
        <Route path="/play/flags" component={Questions} />
        <Route path="/play/places" component={Questions} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
