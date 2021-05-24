//IMPORTS
import React from "react";

//TOOLS

class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    const { showModal } = this.props;

    return (
      <React.Fragment>
        {showModal && (
          <div className="modal" id="modal">
            <h2>Modal Window</h2>
            <div className="content">{this.props.children}</div>
            <div className="actions">
              <button className="toggle-button" onClick={this.onClose}>
                close
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ImageModal;
