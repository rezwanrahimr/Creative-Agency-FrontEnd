import "./HireNow.scss";
import Typed from "react-typed";

const HireNow = () => {
  return (
    <div className="hire-container ">
      <div className="flex items-center ">
        <div>
          <h1>
            Hire a{" "}
            <span className="highlight">
              <Typed
                strings={[
                  "Dedicated Developer ",
                  "Web Developer ",
                  "Android App Developer ",
                  "Digital Marketer ",
                ]}
                typeSpeed={70}
                backSpeed={70}
                loop
              />
            </span>
          </h1>{" "}
        </div>

        <div>
          {" "}
          <button className="btn btn-secondary text-white">Hire Now </button>
        </div>
      </div>
    </div>
  );
};

export default HireNow;
