import React, { Component, Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { routes, screenNames } from "./routes";

class AppRouterSwitch extends Component {
  render() {
    return (
      <>
        <div
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <Suspense fallback={"Loading..."}>
            <Switch>
              {Object.values(screenNames).map((path, index) => (
                <Route
                  exact
                  key={index}
                  path={path}
                  component={routes[path].component}
                />
              ))}
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

export default withRouter(AppRouterSwitch);
