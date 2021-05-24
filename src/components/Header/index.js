//IMPORTS
import React from "react";

//TOOLS

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="app-header__title">
          <h1>Our gallery</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
