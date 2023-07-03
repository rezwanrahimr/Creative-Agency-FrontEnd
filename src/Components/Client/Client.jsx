import client1 from "../../assets/logos/slack.png";
import client2 from "../../assets/logos/google.png";
import client3 from "../../assets/logos/uber.png";
import client4 from "../../assets/logos/netflix.png";
import client5 from "../../assets/logos/airbnb.png";
import "./Client.scss";

const Client = () => {
  return (
    <div className="client-container">
      <div className="flex justify-around items-center client-content">
        <img src={client1} alt="" width={"140px"} height={"36px"} />
        <img src={client2} alt="" width={"129px"} height={"44px"} />
        <img src={client3} alt="" width={"99px"} height={"56px"} />
        <img src={client4} alt="" width={"120px"} height={"67px"} />
        <img src={client5} alt="" width={"161px"} height={"51px"} />
      </div>
    </div>
  );
};

export default Client;
