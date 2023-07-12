import bannerImage from "../../assets/logos/Code typing-rafiki.png";
import MessengerCustomerChat from "react-messenger-customer-chat";
// import Navbar from "../Navbar/Navbar";
import "./Banner.scss";
import bgShape from "../../assets/logos/banner-shap-2 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className="banner-container">
      {/* <Navbar></Navbar> */}
      <div className="content-div md:flex items-center mx-12">
        <div className="text-content md:w-1/2 ">
          <h1 className="primary">
            Creative Web <br /> Development <br /> Company
          </h1>
          <p className="my-6 text-xl ">
            Custom Software Development: Building tailor-made software solutions
            to automate business processes, enhance productivity, or solve
            specific problems.
          </p>
          <button className="btn btn-primary text-white px-8">
            Hire us{" "}
            <FontAwesomeIcon
              icon={faAngleRight}
              beatFade
              style={{ color: "#fcfcfc", marginLeft: "8px" }}
            />
          </button>
        </div>
        <div className="banner-img md:w-1/2">
          <img src={bannerImage} alt="" />
          {/* Facebook Message */}
          <MessengerCustomerChat
            pageId="<111784315290881>"
            appId="<827477455411122>"
            htmlRef="<REF_STRING>"
          />
          ,
        </div>
      </div>
      <div className="bg-shape">
        <img src={bgShape} alt="" />
      </div>
    </div>
  );
};

export default Banner;
