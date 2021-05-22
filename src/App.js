import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainApp from "./app/index";

class App extends React.Component {
  render() {
    const { match, location, initURL = "/" } = this.props;
    if (location.pathname === "/") {
      if (initURL === "" || initURL === "/") {
        return <Redirect to={"/app/gallery"} />;
      } else {
        return <Redirect to={initURL} />;
      }
    }
    return (
      <div className="app-main">
        <Switch>
          <Route>
            <Route path={`${match.url}app`} component={MainApp} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
