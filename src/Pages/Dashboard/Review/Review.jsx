import { useContext } from "react";
import { AuthContexts } from "../../../Context/AuthContext";
import Swal from "sweetalert2";

const Review = () => {
  const { user } = useContext(AuthContexts);
  //
  const handleReview = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const designation = e.target.designation.value;
    const details = e.target.details.value;

    const userReview = {
      name,
      designation,
      details,
      image: user?.photoURL,
    };

    fetch("https://creative-agency-backend-henna.vercel.app/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userReview }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Thanks for Review", "You Review is Submit!", "success");
          e.target.reset();
        }
      });
  };
  return (
    <form className="md:w-1/2" onSubmit={handleReview}>
      <input
        name="name"
        type="text"
        required
        placeholder="Your name "
        className="input input-bordered w-full "
      />{" "}
      <br />
      <input
        name="designation"
        type="text"
        required
        placeholder="Company’s name, Designation"
        className="input input-bordered w-full my-3"
      />
      <br />
      <textarea
        name="details"
        className="textarea textarea-bordered w-full h-28 required"
        placeholder="Project Details"
      ></textarea>
      <br />
      <button
        type="submit"
        className="btn btn-active btn-neutral w-1/2 mt-2 text-white"
      >
        submit
      </button>
    </form>
  );
};

export default Review;
