import team1 from "../../../assets/Team/team-1.jpg";
import team2 from "../../../assets/Team/team-2.jpg";
import team3 from "../../../assets/Team/team-3.jpg";
import team4 from "../../../assets/Team/team-4.jpg";
import team5 from "../../../assets/Team/team-5.jpg";
import team6 from "../../../assets/Team/team-6.jpg";
import team7 from "../../../assets/Team/team-7.jpg";
import team8 from "../../../assets/Team/team-8.jpg";

const Members = () => {
  return (
    <div className="p-12">
      <div className="text-center">
        <h2 className="text-secondary">WE ARE AWESOME</h2>
        <h1 className="text-primary text-4xl font-bold">Our Team Members</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-12">
        <div className="m-3">
          <img className="rounded-lg" src={team1} alt="" />
          <div>
            <h1 className="text-primary text-2xl font-semibold">
              Shakita Daoust
            </h1>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div className="m-3">
          <img className="rounded-lg" src={team2} alt="" />
          <div>
            <h1 className="text-primary text-2xl font-semibold">
              Gerard Licari
            </h1>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div className="m-3">
          <img className="rounded-lg" src={team3} alt="" />
          <div>
            <h1 className="text-primary text-2xl font-semibold">
              Janna Rother
            </h1>
            <p>Graphic Desinger</p>
          </div>
        </div>
        <div className="m-3">
          <img className="rounded-lg" src={team4} alt="" />
          <div>
            <h1 className="text-primary text-2xl font-semibold">
              Gerard Licari
            </h1>
            <p>Graphic Desinger</p>
          </div>
        </div>
        <div className="m-3">
          <img className="rounded-lg" src={team5} alt="" />
          <div>
            <h1 className="text-primary text-2xl font-semibold">
              Teisha Yearta
            </h1>
            <p>Web Developer</p>
          </div>
        </div>
        <div className="m-3">
          <img className="rounded-lg" src={team6} alt="" />
          <div>
            <h1 className="text-primary text-2xl font-semibold">
              Cary Montgomery
            </h1>
            <p>Android/IOS Developer</p>
          </div>
        </div>
        <div className="m-3">
          <img className="rounded-lg" src={team7} alt="" />
          <div>
            <h1 className="text-primary text-2xl font-semibold">
              Mervin Griego
            </h1>
            <p>Android/IOS Developer</p>
          </div>
        </div>
        <div className="m-3">
          <img className="rounded-lg" src={team8} alt="" />
          <div>
            <h1 className="text-primary text-2xl font-semibold">
              Bianca Goers
            </h1>
            <p>Graphic Desinger</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
