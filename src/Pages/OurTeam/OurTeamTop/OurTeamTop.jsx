import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./OurTeamTop.scss";

const OurTeamTop = () => {
  return (
    <div className="ourTeam-top-container">
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
              Our Team
            </Link>
          </li>
        </ul>
        <h1 className="text-white text-4xl font-bold ">Our Team</h1>
      </div>
    </div>
  );
};

export default OurTeamTop;
