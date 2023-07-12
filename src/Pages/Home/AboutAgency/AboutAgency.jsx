import AboutAgencyImg from "../../../assets/images/Programming-amico.png";
import founderImg from "../../../assets/images/IMG_5870 (2)2.jpg";
import Typed from "react-typed";
import "./AboutAgency.scss";

const AboutAgency = () => {
  return (
    <div className="py-12 relative">
      <div className="about-bg"></div>
      <div className="md:flex items-center mx-12">
        <div className="md:w-1/2">
          <img src={AboutAgencyImg} alt="" />
        </div>
        <div className="about-text-container md:w-1/2">
          <h2 className="text-secondary">WE ARE CREATIVE AGENCY</h2>
          <h1 className="text-primary">About Agency</h1>
          <p>
            Developer companies may work with various industries such as
            healthcare, finance, e-commerce, gaming, education, and more,
            catering to the specific needs and demands of their clients.Examples
            of well-known developer companies include Accenture, Infosys, Wipro,
            IBM, Microsoft, Oracle, and many others. However, there are also
            numerous smaller and specialized developer companies that focus on
            niche markets or specific technologies.
          </p>
          <div className="flex bg-slate-100 h-38 md:h-28 my-3">
            <p className="w-3.5 bg-secondary"></p>

            <p className="m-3">
              They offer ongoing support and maintenance services to ensure the
              smooth operation and optimization of software applications.They
              provide guidance and expertise in technology selection.
            </p>
          </div>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={founderImg} />
              </div>
            </div>
            <div className="ms-3">
              <h2 className="text-xl font-semibold">Rezwan Rahim</h2>
              <p className="text-base text-secondary font-medium">
                <Typed
                  strings={["Founder of Creative Agency", "Jr Web Developer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAgency;
