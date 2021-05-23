//IMPORTS
import React from "react";
import Card from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

//TOOLS

class PictureCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { likeHandler, item = {} } = this.props,
      { title, source, liked } = item;
    return (
      <Card>
        <div className="picture-card">
          <div className="picture-card__img">
            <img src={source} alt="image" />
          </div>
          <div className="picture-card-info">
            <div className="picture-card-info__title">
              <h5>{title}</h5>
            </div>
            <div
              onClick={() => likeHandler(item, !liked)}
              className={`picture-card-info__icon ${liked ? "liked" : ""}`}
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default PictureCard;
