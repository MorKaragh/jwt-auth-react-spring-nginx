import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LoginForm} from './components/LoginForm';
import {PrivateForm} from './components/PrivateForm';
import {store} from './store.js';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Route path="/login" component={() => <LoginForm store={store}></LoginForm>} />
        <PrivateRoute path="/private" component={() => <PrivateForm store={store}></PrivateForm>} />
      </div>
    </Router>
  </Provider>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        store.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default App;
