import {
  faComment,
  faEnvelope,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactUsNow.scss";
import { useContext } from "react";
import { AuthContexts } from "../../../Context/AuthContext";
import Swal from "sweetalert2";

const ContactUsNow = () => {
  const { user } = useContext(AuthContexts);

  //
  const handleContact = (e) => {
    e.preventDefault();
    /*    const email = user?.email;
    const name = user?.name;
    const text = e.target.text.value; */

    Swal.fire(
      "Thanks !",
      "we are contacting you as soon as possible !",
      "success"
    );
    e.target.reset();
  };
  return (
    <div className="contact-container p-12 ">
      <div className="md:flex items-center">
        <div className="contact-text-content md:w-1/2 p-3">
          <h2 className="text-secondary">CONTACT NOW</h2>
          <h1 className="text-primary">Have Question? Write a Message</h1>
          <form onSubmit={handleContact}>
            <input
              readOnly
              value={user?.email}
              className="contact-input w-full"
              type="text"
              name="email"
              placeholder="Your email address"
            />{" "}
            <br />
            <input
              required
              value={user?.name}
              className="contact-input w-full"
              type="text"
              name="name"
              placeholder="Your name/Company name"
            />{" "}
            <br />
            <textarea
              required
              className="contact-text-area w-full"
              name="message"
              placeholder="Your message"
              id=""
              cols="30"
              rows="10"
            ></textarea>{" "}
            <br />
            <button
              type="submit"
              className="btn btn-secondary w-full text-white"
            >
              send{" "}
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ color: "#ffffff" }}
              />
            </button>
          </form>
        </div>
        <div className="md:w-1/2 p-3">
          <div className="info-card-one info-card">
            <h1 className="text-primary font-bold text-xl">
              <FontAwesomeIcon icon={faPhone} className="mx-2" /> Phone:{" "}
            </h1>
            <h2 className="mt-2">
              Assistance hours: Monday – Friday, 9 am to 5 pm
            </h2>
            <h3 className="font-medium">(+91) 0000 000 000</h3>
          </div>
          <div className="info-card-two info-card">
            <h1 className="text-primary font-bold text-xl">
              <FontAwesomeIcon icon={faEnvelope} className="mx-2" /> Email:{" "}
            </h1>
            <h2 className="mt-2">
              Our support team will get back to in 24-h during standard business
              hours.
            </h2>
            <h3 className="font-medium">Rezwanrahm69@gmail.com</h3>
          </div>
          <div className="info-card-three info-card">
            <h1 className="text-primary font-bold text-xl">
              <FontAwesomeIcon icon={faComment} className="mx-2" /> Skype
            </h1>
            <h2 className="mt-2">
              We Are Online: Monday – Friday, 9 am to 5 pm
            </h2>
            <h3 className="font-medium">Creative-Agency</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsNow;
