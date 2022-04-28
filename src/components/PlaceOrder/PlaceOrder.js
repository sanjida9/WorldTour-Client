import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";

import "react-datepicker/dist/react-datepicker.css";

const PlaceOrder = () => {
  const { allContext } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const [singleSpot, setSingleSpot] = useState({});
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { user } = allContext;

  useEffect(() => {
    axios
      .get(`https://ancient-badlands-40166.herokuapp.com/spot/${id}`)
      .then((res) => setSingleSpot(res.data));
  }, []);

  const onSubmit = (data) => {
    const cost = singleSpot.price * quantity;
    data.cost = cost;
    data.bookedSpot = singleSpot;
    data.status = "Pending";
    data.userEmail = user.email;

    axios
      .post("https://ancient-badlands-40166.herokuapp.com/placeOrder", data)
      .then((res) => {
        alert("Order has been placed!");
        reset();
      });
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  console.log(user);

  return (
    <div className="container row my-5">
      <div className="card col-md-6">
        <img src={singleSpot.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title text-success fw-bold">
            <i className="fas fa-plane-departure"></i> {singleSpot.planName}
          </h3>
          <h4 className="card-title text-success fw-bold">
            {singleSpot.price}
            <i className="fas fa-dollar-sign"></i>
          </h4>
          <h5 className="card-title text-success fw-bold">
            {singleSpot.rating} <i className="fas fa-star fs-6"></i>
          </h5>
          <p className="card-text fw-bold text-success">
            <i className="fas fa-highlighter"></i> {singleSpot.description}
          </p>
          <NavLink to={`/spot/${singleSpot._id}`}>Book Now</NavLink>
        </div>
      </div>
      <form className="col-md-6 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          {...register("fullName", { required: true })}
          placeholder="Full Name"
          defaultValue={user.displayName}
        />
        {errors.fullName && <span>This field is required</span>}
        <br />
        <br />
        <input
          className="form-control"
          {...register("email", { required: true })}
          placeholder="Email"
          defaultValue={user.email}
        />
        {errors.email && <span>This field is required</span>}
        <br />
        <br />
        <input
          className="form-control"
          {...register("address", { required: true })}
          placeholder="Address"
        />
        {errors.address && <span>This field is required</span>}
        <br />
        <br />
        <input
          defaultValue="1"
          min="1"
          onChangeCapture={handleQuantity}
          type="number"
          className="form-control"
          {...register("quantity", { required: true })}
          placeholder="Quantity"
        />
        {errors.quantity && <span>This field is required</span>}
        <br />
        <br />

        <Controller
          control={control}
          name="startDate"
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholderText="Select date (MM/DD/YYYY)"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
            />
          )}
        />

        <br />
        <br />
        <input
          type="submit"
          value="Place Your Order"
          className="btn btn-success"
        />
      </form>
    </div>
  );
};

export default PlaceOrder;
