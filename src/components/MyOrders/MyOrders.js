import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const [deleteCount, setDeleteCount] = useState(0);
  const [singleUserOrder, setSingleUserOrder] = useState([]);

  const { allContext } = useAuth();
  const { user } = allContext;

  const handleDeleteOrder = (id) => {
    const isDelete = window.confirm("Are you sure?");
    if (isDelete) {
      axios
        .post("https://bloodcurdling-corpse-06487.herokuapp.com/deleteOrder", {
          UserId: id,
        })
        .then((res) => {
          setDeleteCount(deleteCount + 1);
          console.log("Order Deleted");
        });
    }
  };

  useEffect(() => {
    axios
      .post(
        "https://bloodcurdling-corpse-06487.herokuapp.com/singleUserOrders",
        { userEmail: user.email }
      )
      .then((res) => {
        setSingleUserOrder(res.data);
      });
  }, [user, deleteCount]);

  return (
    <div className="container">
      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">USER EMAIL</th>
              <th scope="col">PLAN NAME</th>
              <th scope="col">DURATION</th>
              <th scope="col">TOTAL COST</th>
              <th scope="col">START DATE</th>
              <th scope="col">STATUS</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {singleUserOrder.map((order) => (
              <tr>
                <th>{order.email}</th>
                <th>{order.bookedSpot.planName}</th>
                <td>{order.bookedSpot.duration}</td>
                <td>{order.cost}</td>
                <td>{order.startDate.split("T")[0]}</td>
                <td>{order.status}</td>
                <td>
                  <button
                    onClick={() => handleDeleteOrder(order._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
