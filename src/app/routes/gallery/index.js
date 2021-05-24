//IMPORTS
import React from "react";
import { connect } from "react-redux";
import PictureCardList from "../../../components/PictureCardList";
import ImageModal from "../../../components/ImageModal";

//TOOLS

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showLiked: false, showModal: false, currentPhoto: {} };
  }

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

  pictureClickHandler = () => {
    this.setState((prevState) => {
      return { showModal: !prevState.showModal };
    });
  };

  currentPhotoHandler = (item) => {
    this.setState({ currentPhoto: item });
  };

  render() {
    const { cities } = this.props,
      { showModal, currentPhoto } = this.state;
    return (
      <React.Fragment>
        <div className="app-wrapper">
          <div className="gallery-content">
            <PictureCardList
              likeHandler={this.toggleLikeHandler.bind(this)}
              pictureClickHandler={this.pictureClickHandler}
              currenPhotoHandler={this.currentPhotoHandler}
              list={cities}
            />
          </div>
          {showModal && (
            <ImageModal
              showModal={showModal}
              likeHandler={this.toggleLikeHandler.bind(this)}
              pictureClickHandler={this.pictureClickHandler}
              currenPhotoHandler={this.currentPhotoHandler}
              item={currentPhoto}
            />
          )}
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
