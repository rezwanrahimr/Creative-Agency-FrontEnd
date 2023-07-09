import { Link } from "react-router-dom";
import "./OurPortfolioTop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const OurPortfolioTop = () => {
  return (
    <div className="portfolio-top-container">
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
              Portfolio
            </Link>
          </li>
        </ul>
        <h1 className="text-white text-4xl font-bold ">Our Portfolio</h1>
      </div>
    </div>
  );
};

export default OurPortfolioTop;
