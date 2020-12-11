import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from './components/login'
import Contact from './components/contact'
import Staff from './components/staff'
import Lessons from './components/lessons'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import Boarding from "./components/boarding";
import DashBoard from "./components/dashboard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/staff" exact component={Staff} />
        <Route path="/lessons" exact component={Lessons} />
        <Route path="/boarding" exact component={Boarding} />
        <Route path="/dashboard" exact component={DashBoard} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();

