//IMPORTS
import React from "react";
import Header from "../components/Header";
import { Route, Switch } from "react-router-dom";
import Gallery from "./routes/gallery";

//TOOLS

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;

    return (
      <div className="app-main-container">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-main-content-wrapper">
          <div className="app-main-content">
            <Switch>
              <Route path={`${match.url}/gallery`} component={Gallery} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default MainApp;
