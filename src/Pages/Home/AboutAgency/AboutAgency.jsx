import AboutAgencyImg from "../../../assets/images/Programming-amico.png";
import "./AboutAgency.scss";

const AboutAgency = () => {
  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <img src={AboutAgencyImg} alt="" />
      </div>
      <div className="about-text-container w-1/2">
        <h2>WE ARE CREATIVE AGENCY</h2>
        <h1 className="text-primary">About Agency</h1>
        <p></p>
      </div>
    </div>
  );
};

export default AboutAgency;
