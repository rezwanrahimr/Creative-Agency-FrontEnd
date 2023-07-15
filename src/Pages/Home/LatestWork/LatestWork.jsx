import WorkSimple from "../WorkSimple/WorkSimple";
import "./LatestWork.scss";

const LatestWork = () => {
  return (
    <div className="work-container ">
      <div className="work-text-content ">
        <h2 className="text-secondary">OUR WORK</h2>
        <h1 className="text-primary">Our Latest Creative Work</h1>
      </div>

      <WorkSimple></WorkSimple>
    </div>
  );
};

export default LatestWork;
