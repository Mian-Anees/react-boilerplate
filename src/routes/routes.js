import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ROUTES } from "./routerConfig";
import React from "react";

export const RouterComponent = () => {
    const test = ROUTES.map((route) => {
      
   return <Route
      {...route}
      // component={route.component}
      render={(props) => <route.component {...props} />}
    ></Route>
    })
  console.log(test);
  return (
    <BrowserRouter>
      <Switch>
        {test}
      </Switch>
    </BrowserRouter>
  );
};
