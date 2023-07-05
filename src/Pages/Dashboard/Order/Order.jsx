import { useContext, useState } from "react";
import "./Order.scss";
import { AuthContexts } from "../../../Context/AuthContext";
import Swal from "sweetalert2";

const Order = () => {
  const { user } = useContext(AuthContexts);
  const [service, setService] = useState("Website Design & Development");
  const [proDetails, setProDetails] = useState("");

  //
  const handleOrder = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const serviceName = service;
    const projectDetails = proDetails;
    const price = e.target.price.value;
    const projectFile = e.target.file.files[0];

    const order = {
      name,
      email,
      serviceName,
      projectDetails,
      price,
      status: "On going",
    };
    console.log(order);
    //
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.ackhonaged && console.log(data);
        Swal.fire("Thanks for Order", "You Order is Submit!", "success");
      });
  };
  return (
    <form className="order-container" onSubmit={handleOrder}>
      <input
        name="name"
        type="text"
        required
        placeholder="Your name / company’s name"
        className="input input-bordered w-full "
      />{" "}
      <br />
      <input
        name="email"
        type="text"
        value={user?.email}
        required
        placeholder="Your email address"
        className="input input-bordered w-full "
      />
      <br />
      <select
        required
        className="select select-bordered w-full  "
        onChange={(e) => setService(e.target.value)}
      >
        <option selected>Website Design & Development</option>
        <option>Mobile App Development</option>
        <option>Digital Marketing Service</option>
      </select>
      <br />
      <textarea
        required
        onChange={(e) => setProDetails(e.target.value)}
        name="details"
        className="textarea textarea-bordered w-full h-28 required"
        placeholder="Project Details"
      ></textarea>
      <p className="text-red-400">
        {proDetails.length > 0 &&
          proDetails.length < 20 &&
          "please enter at least 20 character"}
      </p>
      <br />
      <div className="flex">
        <input
          required
          name="price"
          value={
            service == "Website Design & Development"
              ? 299
              : service == "Mobile App Development"
              ? 390
              : service == "Digital Marketing Service"
              ? 180
              : " "
          }
          type="number"
          placeholder="Price"
          className="input input-bordered w-1/2 required"
        />
        <input
          required
          name="file"
          type="file"
          placeholder="Upload project file"
          className="file-input file-input-ghost w-1/2 bg-secondary text-white required"
        />
      </div>
      <br />
      <button className="btn btn-active btn-neutral w-1/2 text-white">
        send
      </button>
    </form>
  );
};

export default Order;
