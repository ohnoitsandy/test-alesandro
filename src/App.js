import React from "react";
import { Route, Switch } from "react-router-dom";

function App(props) {
  const { match } = props;
  return (
    <div className="app-main">
      <Switch>
        <Route>
          {/*<Route path={`${match.url}/day-trip`} component={DayTrip} />*/}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
