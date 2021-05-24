//IMPORTS
import React from "react";
import { connect } from "react-redux";
import PictureCardList from "../../../components/PictureCardList";
import ImageModal from "../../../components/ImageModal";

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
  /*
  toggleShowPictureHandler(item, value) {
    const { cities } = this.props


    this.props.toggleLike(likedPhotos);
  }*/

  constructor(props) {
    super(props);
    this.state = { showLiked: false };
  }

  render() {
    const { cities, likedPhotos } = this.props,
      { showLiked } = this.state;
    return (
      <React.Fragment>
        <div className="app-wrapper">
          <div className="gallery-content">
            <PictureCardList
              likeHandler={this.toggleLikeHandler.bind(this)}
              list={showLiked ? likedPhotos : cities}
            />
          </div>
          <ImageModal showModal={true} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    likedPhotos: state.gallery.likedPhotos,
    cities: state.gallery.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLike: (cities) => dispatch({ type: "toggle_like", cities }),
    togglePhotos: (likedPhotos) =>
      dispatch({ type: "toggle_photos", likedPhotos }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
