import { Link } from "react-router-dom";
import "./ContactTop.scss";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactTop = () => {
  return (
    <div className="contact-top-container">
      <div className="container-effect"></div>
      <div className="absolute left-0 right-0  flex flex-col justify-center items-center h-full">
        <ul className="flex text-white">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="mx-2">
            <Link>
              <FontAwesomeIcon
                icon={faAnglesRight}
                fade
                style={{ color: "#ebecf0" }}
              />{" "}
              Contact
            </Link>
          </li>
        </ul>
        <h1 className="text-white text-4xl font-bold ">Contact US</h1>
      </div>
    </div>
  );
};

export default ContactTop;
