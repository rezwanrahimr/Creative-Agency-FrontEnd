import Client from "../../../Components/Client/Client";
import ContactNow from "../../../Components/ContactNow/ContactNow";
import HireNow from "../../../Components/HireNow/HireNow";
import AboutAgency from "../AboutAgency/AboutAgency";
import AllDomains from "../AllDomains/AllDomains";
import LatestWork from "../LatestWork/LatestWork";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <AboutAgency></AboutAgency>
      <Services></Services>
      <HireNow></HireNow>
      <LatestWork></LatestWork>
      <Client></Client>
      <AllDomains></AllDomains>
      <ContactNow></ContactNow>
    </>
  );
};

export default Home;
