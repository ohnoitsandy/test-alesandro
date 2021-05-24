//IMPORTS
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default MainApp;
