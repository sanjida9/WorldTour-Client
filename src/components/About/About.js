import React from "react";
import a1 from "../../assets/images/a1.png";
import a2 from "../../assets/images/a2.png";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="p-5 text-success fw-bold text-center">About Us</h1>
          <div className="col-md-6 p-5 text-success">
            <img src={a1} alt="" />
            <h2 className="fw-bold">Travel With Us</h2>
            <h5>
              No matter who you are, or where you are going, our travel brands
              help every type of traveler not only find the trip that’s right
              for them, but get the best value every time.
            </h5>
          </div>
          <div className="col-md-6 p-5 text-success">
            <img src={a2} alt="" />
            <h2 className="fw-bold">Partner With Us</h2>
            <h5>
              We connect partners big and small to the universe of travelers,
              giving access to data, tools and technology that empowers,
              maximizes potential and builds their business.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
