import ContactNow from "../../../Components/ContactNow/ContactNow";
import HireNow from "../../../Components/HireNow/HireNow";
import AboutAgency from "../AboutAgency/AboutAgency";
import LatestWork from "../LatestWork/LatestWork";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <AboutAgency></AboutAgency>
      <Services></Services>
      <HireNow></HireNow>
      <LatestWork></LatestWork>
      <ContactNow></ContactNow>
    </>
  );
};

export default Home;
