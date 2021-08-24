import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./features/LoginPage";
import HomePage2 from "./features/HomePage2";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LoginPage} />
    </Switch>
    <Switch>
      <Route path="/2" exact component={HomePage2} />
    </Switch>
  </BrowserRouter>
);

export default Router;
