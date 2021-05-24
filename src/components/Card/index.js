//IMPORTS
import React from "react";

//TOOLS

class Card extends React.Component {
  render() {
    return <div className="card">{this.props.children}</div>;
  }
}

export default Card;
