import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HireNow.scss";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const HireNow = () => {
  return (
    <div className="hire-container ">
      <div className="flex items-center text-4xl">
        <h1>
          Hire a <span className="font-bold">Dedicated Developer</span>
        </h1>
        <button className="btn btn-secondary">
          Hire Now{" "}
          <FontAwesomeIcon
            icon={faAngleRight}
            beatFade
            style={{ color: "#ffffff", margin: "3px 0 0 8px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default HireNow;
