import client1 from "../../assets/logos/slack.png";
import client2 from "../../assets/logos/google.png";
import client3 from "../../assets/logos/uber.png";
import client4 from "../../assets/logos/netflix.png";
import client5 from "../../assets/logos/airbnb.png";
import "./Client.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Client = () => {
  return (
    <div className="client-container mt-20 ">
      <div className="text-center md:mb-24">
        <h2 className="text-secondary">OUR HAPPY CUSTOMERS</h2>
        <h1 className="text-primary font-bold text-4xl">Some of our Clients</h1>
      </div>
      <div className="flex justify-around items-center client-content my-5 md:my-12 ">
        <img src={client1} alt="" width={"140px"} height={"36px"} />
        <img src={client2} alt="" width={"129px"} height={"44px"} />
        <img src={client3} alt="" width={"99px"} height={"56px"} />
        <img src={client4} alt="" width={"120px"} height={"67px"} />
        <img src={client5} alt="" width={"161px"} height={"51px"} />
      </div>
      <div className="flex items-center justify-center">
        <div className="md:flex items-center  mt-12">
          <h1 className="text-2xl font-semibold me-3">
            We Promise. We Deliver.
          </h1>
          <button className="btn  btn-secondary text-white rounded-full hover:btn-primary ">
            Let's Work Together{" "}
            <FontAwesomeIcon
              icon={faAngleRight}
              beatFade
              style={{ color: "#ffffff", margin: "3px 0 0 8px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client;
