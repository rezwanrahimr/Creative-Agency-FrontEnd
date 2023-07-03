import network from "../../../assets/logos/icon-1.png";
import marketing from "../../../assets/logos/icon-2.png";
import ecommerce from "../../../assets/logos/icon-3.png";
import video from "../../../assets/logos/icon-4.png";
import banking from "../../../assets/logos/icon-5.png";
import enterprise from "../../../assets/logos/icon-6.png";
import education from "../../../assets/logos/icon-7.png";
import travels from "../../../assets/logos/icon-8.png";
import health from "../../../assets/logos/icon-9.png";
import ticket from "../../../assets/logos/icon-10.png";
import restaurant from "../../../assets/logos/icon-11.png";
import business from "../../../assets/logos/icon-12.png";

import "./AllDomains.scss";

const AllDomains = () => {
  return (
    <div className="md:flex items-center md:px-12 domain-container">
      <div className="domain-content px-8">
        <h2 className="text-secondary">INDUSTRIES WE WORK FOR</h2>
        <h1 className="text-primary">Helping Businesses in All Domains</h1>
        <p>
          Successfully delivered digital products Lorem Ipsum is simply dummy
          text of the printing and typesetting industry.
        </p>
      </div>
      <div className="services-content">
        <div id="networking">
          <img src={network} alt="" />
          <p>Social Networking</p>
        </div>
        <div id="marketing">
          <img src={marketing} alt="" />
          <p>Digital Marketing</p>
        </div>
        <div id="ecommerce">
          <img src={ecommerce} alt="" />
          <p>Ecommerce Development</p>
        </div>
        <div id="video">
          <img src={video} alt="" />
          <p>Video Service</p>
        </div>
        <div id="banking">
          <img src={banking} alt="" />
          <p>Banking Service</p>
        </div>
        <div id="enterprise">
          <img src={enterprise} alt="" />
          <p>Enterprise Service</p>
        </div>
        <div id="education">
          <img src={education} alt="" />
          <p>Education Service</p>
        </div>
        <div id="travels">
          <img src={travels} alt="" />
          <p>Tour and Travels</p>
        </div>
        <div id="health">
          <img src={health} alt="" />
          <p>Health Service</p>
        </div>
        <div id="ticket">
          <img src={ticket} alt="" />
          <p>Event & Ticket</p>
        </div>
        <div id="restaurant">
          <img src={restaurant} alt="" />
          <p>Restaurant Service</p>
        </div>
        <div id="business">
          <img src={business} alt="" />
          <p>Business Consultant</p>
        </div>
      </div>
    </div>
  );
};

export default AllDomains;
