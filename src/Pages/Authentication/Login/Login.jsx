import logo from "../../../assets/logos/logo.png";
import googleImg from "../../../assets/images/Group 573.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContexts } from "../../../Context/AuthContext";

const Login = () => {
  const { loginWithEmail } = useContext(AuthContexts);
  const handleLoginForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Login with email and password
    loginWithEmail(email, password)
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
        <form className="hero-content flex-col " onSubmit={handleLoginForm}>
          <div className="text-center ">
            <img className="company-logo" src={logo} alt="" />
            <h1 className="text-2xl mt-3 font-bold">Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="flex  border rounded-full p-1">
                <img src={googleImg} alt="" width={"8%"} />
                <button className="ms-8">Continue with Google</button>
              </div>
              <button>
                Don’t have an account?{" "}
                <Link to="/signUp" className="text-secondary">
                  Create an account
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
