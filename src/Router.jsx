import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./features/LoginPage";
import HomePage from "./features/homePage/HomePage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
    <Switch>
      <Route path="/login" exact component={LoginPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
