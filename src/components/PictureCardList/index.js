//IMPORTS
import React from "react";
import PictureCard from "../PictureCard";

//TOOLS

class PictureCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  render() {
    const { list, likeHandler } = this.props;
    return (
      <div className="picture-card-list">
        {list.map((item) => {
          return (
            <div className="picture-card-list__item">
              <PictureCard likeHandler={likeHandler} item={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PictureCardList;
