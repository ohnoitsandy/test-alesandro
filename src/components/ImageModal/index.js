//IMPORTS
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";

//TOOLS

class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { localLiked: this.props.item.liked };
  }

  clickHandler = () => {
    const { likeHandler, item } = this.props,
      { liked } = item;
    likeHandler(item, !liked);
    this.setState((prevState) => {
      return { localLiked: !prevState.localLiked };
    });
  };

  render() {
    const { showModal, item = {}, pictureClickHandler } = this.props,
      { localLiked } = this.state,
      { title, source, description } = item;

    return (
      <React.Fragment>
        {showModal && (
          <div className="modal" id="modal">
            <div className="modal-content">
              <div className="modal-content__close">
                <button className="toggle-button" onClick={pictureClickHandler}>
                  <FontAwesomeIcon size="lg" icon={faTimes} />
                </button>
              </div>
              <div>
                <img src={source} alt="modal icon" />
              </div>
              <div className="modal-content__info">
                <div className="modal-content__title">
                  <h3>{title}</h3>
                </div>
                <div
                  onClick={this.clickHandler}
                  className={`modal-content__icon ${localLiked ? "liked" : ""}`}
                >
                  <FontAwesomeIcon size="lg" icon={faHeart} />
                </div>
              </div>

              <div className="modal-content__description">
                <span>{description}</span>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ImageModal;
