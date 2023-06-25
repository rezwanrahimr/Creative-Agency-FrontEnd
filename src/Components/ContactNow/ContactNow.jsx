import "./ContactNow.scss";
import contactImg from "../../assets/images/Contact us-pana.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactNow = () => {
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
          <img src={contactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactNow;
