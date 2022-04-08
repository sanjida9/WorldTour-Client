import React from "react";
import Banner from "../Banner/Banner";
import Tours from "../Tours/Tours";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Tours></Tours>

      <div id="award" className="">
        <div className="">
          <div className="py-4">
            <h2 className=" fw-bold text-center text-success">
              Award Winning and Top Rated Tour Operator
            </h2>
            <p className=" text-center text-success">
              call our agents for book.
            </p>
          </div>
        </div>
        <div className="">
          <div className="row p-4">
            <div className="col-3 px-2 text-center  p-4 text-white">
              <div className="bg-success py-4">
                <i className="fas fa-user-nurse fs-1"></i>
                <p className="">8000+ Our Local Guides</p>
              </div>
            </div>
            <div className="col-3 px-2 text-center  p-4 text-white">
              <div className="bg-success py-4">
                <i className="fas fa-user-shield fs-1"></i>
                <p className="">100% Trusted Tour Agency</p>
              </div>
            </div>
            <div className=" col-3 px-2 text-center p-4 text-white">
              <div className="bg-success py-4">
                <i className=" fas fa-user-clock fs-1"></i>
                <p className="">28+ Years of Trave Experience</p>
              </div>
            </div>
            <div className="col-3 px-2 text-center p-4 text-white">
              <div className="bg-success py-4">
                <i className="far fa-laugh-beam fs-1"></i>
                <p className="">98% Our Travelers are Happy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="review" className="row p-5">
        <div className="col-6">
          <img
            className=""
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hiking-quotes-1586278882.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*"
            alt=""
          />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <h3 className="">Our Top Review</h3>
          <p className="">
            {" "}
            I have been using this tool since 2015 and have already plnned four
            trips with triphobo. I love your website. Really helpful tool for
            travel planning. I especially enjoyed that we could add multiple
            destinations as well as activities in the days.. Thumbs up!!!
          </p>
          <p className="mb-5">- Andria</p>
          <div>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
