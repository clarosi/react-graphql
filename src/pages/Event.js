import React, { Component } from "react";

import Modal from "../Modal/Modal";

class Event extends Component {
  state = {
    showModal: true
  };

  modalHandler = () => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.showModal && <Modal />}
        <div className="mt-5 text-center">
          <button
            onClick={this.modalHandler}
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
          >
            Create Event
          </button>
        </div>
      </div>
    );
  }
}

export default Event;
