import React from "react";
import notfound from "./../../assets/images/404.jpg";

const NotFound = () => {
  return (
    <div className="container">
      <div className="text-center">
        <img className="img-fluid p-5 w-75 " src={notfound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
