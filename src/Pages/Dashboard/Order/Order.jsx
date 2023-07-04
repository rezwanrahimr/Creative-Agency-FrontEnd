import "./Order.scss";

const Order = () => {
  return (
    <form className="order-container">
      <input
        name="name"
        type="text"
        placeholder="Your name / company’s name"
        className="input input-bordered w-full "
      />{" "}
      <br />
      <input
        name="email"
        type="text"
        placeholder="Your email address"
        className="input input-bordered w-full "
      />
      <br />
      <select className="select select-bordered w-full  ">
        <option disabled selected>
          Who shot first?
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <br />
      <textarea
        className="textarea textarea-bordered w-full h-28"
        placeholder="Project Details"
      ></textarea>
      <br />
      <div className="flex">
        <input
          type="number"
          placeholder="Price"
          className="input input-bordered w-1/2 "
        />
        <input
          type="file"
          placeholder="Upload project file"
          className="file-input file-input-ghost w-1/2 bg-secondary text-white"
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
