import {
  faComment,
  faEnvelope,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactUsNow.scss";

const ContactUsNow = () => {
  return (
    <div className="contact-container p-12 ">
      <div className="md:flex items-center">
        <div className="contact-text-content md:w-1/2 p-3">
          <h2 className="text-secondary">CONTACT NOW</h2>
          <h1 className="text-primary">Have Question? Write a Message</h1>
          <form action="">
            <input
              className="contact-input w-full"
              type="text"
              name="email"
              placeholder="Your email address"
            />{" "}
            <br />
            <input
              className="contact-input w-full"
              type="text"
              name="name"
              placeholder="Your name/Company name"
            />{" "}
            <br />
            <textarea
              className="contact-text-area w-full"
              name="message"
              placeholder="Your message"
              id=""
              cols="30"
              rows="10"
            ></textarea>{" "}
            <br />
            <button className="btn btn-secondary w-full text-white">
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
              <FontAwesomeIcon icon={faPhone} /> Phone:{" "}
            </h1>
            <h2>Assistance hours: Monday – Friday, 9 am to 5 pm</h2>
            <h3 className="font-medium">(+91) 0000 000 000</h3>
          </div>
          <div className="info-card-two info-card">
            <h1 className="text-primary font-bold text-xl">
              <FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
            </h1>
            <h2>
              Our support team will get back to in 24-h during standard business
              hours.
            </h2>
            <h3 className="font-medium">Rezwanrahm69@gmail.com</h3>
          </div>
          <div className="info-card-three info-card">
            <h1 className="text-primary font-bold text-xl">
              <FontAwesomeIcon icon={faComment} /> Skype
            </h1>
            <h2>We Are Online: Monday – Friday, 9 am to 5 pm</h2>
            <h3 className="font-medium">Creative-Agency</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsNow;
