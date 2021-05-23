//IMPORTS
import React from "react";
import PictureCardList from "../../../components/PictureCardList";
import { connect } from "react-redux";

//TOOLS

class Gallery extends React.Component {
  toggleLikeHandler(item, value) {
    const { cities } = this.props,
      likedPhotos = cities.map((city) => {
        if (item.source === city.source) {
          return {
            ...city,
            liked: value,
          };
        }
        return city;
      });
    this.props.toggleLike(likedPhotos);
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="gallery-content">
          <PictureCardList
            likeHandler={this.toggleLikeHandler.bind(this)}
            list={this.props.cities}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { likedPhotos: state.likedPhotos, cities: state.gallery.cities };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLike: (cities) => dispatch({ type: "toggle_like", cities }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
