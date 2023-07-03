import logo from "../../../assets/logos/logo.png";
import googleImg from "../../../assets/images/Group 573.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
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
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input type="file" className="file-input w-full max-w-xs" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
