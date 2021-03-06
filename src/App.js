import React from "react";
import { Navbar, Home, Programs } from "./components";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Programs" component={Programs}></Route>
      </Switch>
    </div>
  );
}
