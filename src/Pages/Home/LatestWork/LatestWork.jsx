import WorkSimple from "../WorkSimple/WorkSimple";
import "./LatestWork.scss";
import latestShape from "../../../assets/images/banner-shap-2.png";

const LatestWork = () => {
  return (
    <div className="work-container md:px-14">
      <div className="work-text-content ">
        <h2 className="text-secondary">OUR WORK</h2>
        <h1 className="text-primary">Our Latest Creative Work</h1>
      </div>

      <WorkSimple></WorkSimple>
      <div className="bg-shape">
        <img src={latestShape} alt="" />
      </div>
    </div>
  );
};

export default LatestWork;
