//IMPORTS
import React from "react";
//TOOLS

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    const { date } = this.state;
    return (
      <div className="app-footer__info">
        <div className="app-footer__item">
          <h5>{date.toLocaleString()}</h5>
        </div>
        <div className="app-footer__item">
          <h5>https://github.com/ohnoitsandy/test-alesandro/tree/master</h5>
        </div>
        <div className="app-footer__item">
          <h5>Alessandro Andrade Ramos</h5>
        </div>
      </div>
    );
  }
}

export default Footer;
