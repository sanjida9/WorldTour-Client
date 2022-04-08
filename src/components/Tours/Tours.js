import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";

const Tours = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/spots").then((res) => setSpots(res.data));
  }, []);

  return (
    <div>
      <div className="container">
        {spots.length > 0 ? (
          <div className="row p-3">
            {spots.map((spot) => (
              <div className="col-md-4  p-2">
                <div className="card">
                  <img src={spot.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bold text-success">
                      <i class="fas fa-plane-departure"></i>
                      {spot.planName}
                    </h5>
                    <h6 className="card-title text-center fw-bold text-success">
                      {spot.price}$
                    </h6>
                    <p className="card-text text-center">
                      {spot.description.slice(0, 140)}...
                    </p>
                    <NavLink
                      className="btn-success text-white text-center"
                      to={`/spot/${spot._id}`}
                    >
                      Book Now
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row my-5">
            <div className="col d-flex align-items-center justify-content-center">
              <div class="spinner-border text-primary " role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tours;
