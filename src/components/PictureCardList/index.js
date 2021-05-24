//IMPORTS
import React from "react";
import PictureCard from "../PictureCard";

//TOOLS

class PictureCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  filteredCities = (list, liked) => {
    if (liked) {
      return list.filter((item) => item.liked);
    }
    return list;
  };

  handleLike = () => {
    this.setState((prevState) => {
      return { liked: !prevState.liked };
    });
  };

  render() {
    const { list, likeHandler } = this.props,
      { liked } = this.state;
    const filteredList = this.filteredCities(list, liked);
    return (
      <React.Fragment>
        <div className={`picture-card-list__btn ${liked ? "active" : ""}`}>
          <button onClick={this.handleLike}>
            <span>Photos you liked</span>
          </button>
        </div>
        <div className="picture-card-list">
          {filteredList.map((item) => {
            return (
              <div className="picture-card-list__item">
                <PictureCard likeHandler={likeHandler} item={item} />
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default PictureCardList;
