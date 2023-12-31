import logo from "../../../assets/logos/logo.png";
import googleImg from "../../../assets/images/Group 573.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContexts } from "../../../Context/AuthContext";
import { verifyUser } from "../../../hooks/VerifyUser";
import Swal from "sweetalert2";

const SignUp = () => {
  // Auth Context
  const { createUserWithEmail, profileUpdate, googleLogin } =
    useContext(AuthContexts);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleSignUpForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.image.files[0];

    const image = new FormData();
    image.append("image", photo);

    // Create User with email and password
    createUserWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          fetch(
            `https://api.imgbb.com/1/upload?key=5756255c76d4869d95450653607b1dd9`,
            {
              method: "POST",
              body: image,
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data?.success) {
                const photoUrl = data.data.url;

                profileUpdate(name, photoUrl)
                  .then(() => {
                    const userInfo = {
                      name,
                      email,
                      image: photoUrl,
                      role: "User",
                    };
                    verifyUser(userInfo);
                    navigate(from, { replace: true });
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            });
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
            <h1 className="text-2xl mt-3 font-bold">Sign Up</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSignUpForm}>
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
              </form>
              <div className="flex  border rounded-full p-1">
                <img src={googleImg} alt="" width={"8%"} />
                <button className="ms-8" onClick={handleGoogleLogin}>
                  Continue with Google
                </button>
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
