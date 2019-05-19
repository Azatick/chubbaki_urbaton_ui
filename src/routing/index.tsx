import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import paths from "./paths";

export default () => (
  <Router>
    {paths.map((pathComponent, key) => {
      const { component: Component, path } = pathComponent;
      return React.cloneElement(<Component />, { path, key });
    })}
  </Router>
);
