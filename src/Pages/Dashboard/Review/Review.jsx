const Review = () => {
  return (
    <form className="w-1/2">
      <input
        name="name"
        type="text"
        required
        placeholder="Your name "
        className="input input-bordered w-full "
      />{" "}
      <br />
      <input
        name="email"
        type="text"
        required
        placeholder="Company’s name, Designation"
        className="input input-bordered w-full my-3"
      />
      <br />
      <textarea
        name="Description"
        className="textarea textarea-bordered w-full h-28 required"
        placeholder="Project Details"
      ></textarea>
      <br />
      <button className="btn btn-active btn-neutral w-1/2 mt-2 text-white">
        submit
      </button>
    </form>
  );
};

export default Review;
