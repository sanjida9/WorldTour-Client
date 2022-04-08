import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const NewSpot = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://bloodcurdling-corpse-06487.herokuapp.com/newSpot", data)
      .then((res) => {
        alert("New spot has been added!");
        reset();
      });
  };

  return (
    <div className="container mx-auto p-4 bg-gray-200 p-4 my-4">
      <h2 className="text-center text-3xl font-bold mb-6">
        Add A New <span className="text-primary">Spot</span>
      </h2>

      <form id="newSpot" className="my-5 p-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          {...register("planName", { required: true })}
          placeholder="Plan Name"
        />
        {errors.planName && <span>This field is required</span>}
        <br />
        <br />
        <input
          className="form-control"
          {...register("location", { required: true })}
          placeholder="Location"
        />
        {errors.location && <span>This field is required</span>}
        <br />
        <br />
        <input
          className="form-control"
          {...register("duration", { required: true })}
          placeholder="Duration"
        />
        {errors.duration && <span>This field is required</span>}
        <br />
        <br />
        <input
          className="form-control"
          {...register("price", { required: true })}
          placeholder="Price"
        />
        {errors.price && <span>This field is required</span>}
        <br />
        <br />
        <input
          className="form-control"
          {...register("rating", { required: true })}
          placeholder="Rating"
        />
        {errors.rating && <span>This field is required</span>}
        <br />
        <br />
        <input
          className="form-control"
          {...register("img", { required: true })}
          placeholder="Image URL"
        />
        {errors.img && <span>This field is required</span>}
        <br />
        <br />
        <textarea
          className="form-control"
          {...register("description", { required: true })}
          placeholder="Description"
        />
        {errors.description && <span>This field is required</span>}
        <br />
        <br />
        <input
          className=" btn-success bg-blue px-5 py-2 rounded border-0"
          type="submit"
          value="Add Spot"
        />
      </form>
    </div>
  );
};

export default NewSpot;
