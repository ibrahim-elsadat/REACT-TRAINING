import { Component } from "react";

export default class Gallary extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="bg-info">
          <h1 className="bg-danger">
            {" "}
            <i className="fas fa-home"></i>{" "}
            <span className="s">Gallry Out</span> NOW ... !
          </h1>
        </div>
      </>
    );
  }
}
