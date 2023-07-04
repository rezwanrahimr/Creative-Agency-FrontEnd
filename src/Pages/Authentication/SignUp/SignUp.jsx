import logo from "../../../assets/logos/logo.png";
import googleImg from "../../../assets/images/Group 573.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContexts } from "../../../Context/AuthContext";

const SignUp = () => {
  // Auth Context
  const { createUserWithEmail } = useContext(AuthContexts);
  const handleSignUpForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.image.files[0];

    // Create User with email and password
    createUserWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <form className="hero-content flex-col " onSubmit={handleSignUpForm}>
          <div className="text-center ">
            <img className="company-logo" src={logo} alt="" />
            <h1 className="text-2xl mt-3 font-bold">Sign Up</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input
                  name="image"
                  type="file"
                  className="file-input w-full max-w-xs"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
              <div className="flex  border rounded-full p-1">
                <img src={googleImg} alt="" width={"8%"} />
                <button className="ms-8">Continue with Google</button>
              </div>
              <button>
                Already have an account?{" "}
                <Link to="/login" className="text-secondary">
                  Login
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
