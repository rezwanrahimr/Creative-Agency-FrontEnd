import teamB from "../../../assets/Team/team-b.jpg";
import teamA from "../../../assets/Team/team-a.jpg";
import teamC from "../../../assets/Team/team-c.jpg";
import "./Directors.scss";

const Directors = () => {
  return (
    <div className="p-12">
      <div className="text-center">
        <h2 className="text-secondary">WE ARE AWESOME</h2>
        <h1 className="text-primary text-4xl font-bold">
          Our Managing Directors
        </h1>
      </div>
      <div className="md:flex mt-12">
        <div className="m-5">
          <img src={teamB} alt="" />
          <div>
            <h1 className="text-primary text-2xl font-semibold">Moana Smile</h1>
            <p>Company CEO</p>
          </div>
        </div>
        <div className="m-5">
          <img src={teamA} alt="" />
          <div>
            <h1 className="text-primary text-2xl font-semibold">Sasa Smile</h1>
            <p>Company CTO</p>
          </div>
        </div>
        <div className="m-5">
          <img src={teamC} alt="" />
          <div>
            <h1 className="text-primary text-2xl font-semibold">
              Bhvika Smile
            </h1>
            <p>Company COO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directors;
