import logo from "../../../assets/logos/logo.png";
import googleImg from "../../../assets/images/Group 573.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContexts } from "../../../Context/AuthContext";
import { verifyUser } from "../../../hooks/VerifyUser";
import Swal from "sweetalert2";

const Login = () => {
  const { loginWithEmail, googleLogin } = useContext(AuthContexts);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleLoginForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Login with email and password
    loginWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userInfo = {
          email: email,
        };
        if (user) {
          verifyUser(userInfo);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user) {
          const userInfo = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            role: "User",
          };
          verifyUser(userInfo);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${errorMessage}`,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <img className="company-logo" src={logo} alt="" />
            <h1 className="text-2xl mt-3 font-bold">Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLoginForm}>
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
              </form>
              <div className="flex  border rounded-full p-1">
                <img src={googleImg} alt="" width={"8%"} />
                <button className="ms-8" onClick={handleGoogleLogin}>
                  Continue with Google
                </button>
              </div>
              <button>
                Don’t have an account?{" "}
                <Link to="/signUp" className="text-secondary">
                  Create an account
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
