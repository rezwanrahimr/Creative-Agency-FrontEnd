import { useContext, useState } from "react";
import "./Order.scss";
import { AuthContexts } from "../../../Context/AuthContext";

const Order = () => {
  const { user } = useContext(AuthContexts);
  const [service, setService] = useState("");

  //
  const handleOrder = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const serviceName = service;
    const projectDetails = e.target.details.value;
    const price = e.target.price.value;
    const projectFile = e.target.file.files[0];
    console.log(name, email, serviceName, projectDetails, price, projectFile);
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
        className="select select-bordered w-full  required"
        onChange={(e) => setService(e.target.value)}
      >
        <option selected>Website Design & Development</option>
        <option>Mobile App Development</option>
        <option>Digital Marketing Service</option>
      </select>
      <br />
      <textarea
        name="details"
        className="textarea textarea-bordered w-full h-28 required"
        placeholder="Project Details"
      ></textarea>
      <br />
      <div className="flex">
        <input
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
