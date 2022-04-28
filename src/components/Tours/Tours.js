import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Tours = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    axios
      .get("https://ancient-badlands-40166.herokuapp.com/spots")
      .then((res) => setSpots(res.data));
  }, []);
  return (
    <div>
      <div className="container">
        {spots.length > 0 ? (
          <div className="row p-3">
            <h1 className="text-center fw-bold text-success p-4">Tours</h1>
            {spots.map((spot) => (
              <div className="col-md-4  p-2">
                <div className="card">
                  <img src={spot.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bold text-success">
                      <i className="fas fa-plane-departure"></i>
                      {spot.planName}
                    </h5>
                    <h5 className="card-title text-center fw-bold text-success">
                      <i className="fas fa-dollar-sign"></i>

                      {spot.price}
                    </h5>
                    <p className="card-text text-center fw-bold text-success">
                      <i className="fas fa-highlighter"></i>{" "}
                      {spot.description.slice(0, 100)}...
                    </p>

                    <div className="text-center">
                      <NavLink
                        className="btn-success px-4 py-2 "
                        to={`/spot/${spot._id}`}
                      >
                        <i className="fas fa-plus-circle"></i> Book Now
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row my-5">
            <div className="col d-flex align-items-center justify-content-center">
              <div className="spinner-border text-primary " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tours;
