import { Component } from "react";

export default class Child extends Component {
  state = {};
  render() {
    let {
      id,
      imageSrc,
      Name,
      firstRacer,
      secondRacer,
      firstRacerNumber,
      secondRacerNumber,
      Qalf,
      F1CarName,
    } = this.props.teamInfo;
    return (
      <>
        <div className="col-md-3">
          <div className="takeIt py-2 p-2 my-2 rounded-4 m-auto text-center border-5 position-relative bg-light">
            <img src={imageSrc} className="w-100 rounded-4 py-3 p-2 " alt="" />
            <h1 className="bg-warning w-100 p-1 mb-3 rounded-2 m-auto">
              {Name}
            </h1>
            <h2 className="text-bg-dark border bg-opacity-50 rounded-1 ">
              {F1CarName}
            </h2>
            <h3 className="fw-bold">
              {firstRacer} : <span>{firstRacerNumber}</span>
            </h3>
            <h3 className="fw-bold">
              {secondRacer} : <span>{secondRacerNumber}</span>
            </h3>
            <div
              className={
                Qalf === "YES"
                  ? "q text-white  bg-success p-1 d-flex position-absolute rounded-start-3 rounded-bottom-3 top-0 end-0"
                  : "q text-white  bg-danger p-1 d-flex position-absolute rounded-start-3 rounded-bottom-3 top-0 end-0"
              }
            >
              {Qalf}
            </div>
            <button
              onClick={() => this.props.Delete(id)}
              className="btn btn-outline-danger MX-3 btn-sm "
            >
              Delete Box
            </button>
            <button
              onClick={() => this.props.Update(id)}
              className="btn btn-outline-dark mx-3  btn-sm "
            >
              Update Car ID
            </button>
          </div>
        </div>
      </>
    );
  }
}

let ages = [10, 20, 30, 50];
ages.map((age) => `<h2>${age}</h2>`);
