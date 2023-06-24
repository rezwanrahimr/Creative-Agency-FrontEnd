import ServiceItems from "../ServiceItems/ServiceItems";
import "./Services.scss";

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-text-content">
        <h2 className="text-secondary">SERVICES WE’RE PROVIDED</h2>
        <h1 className="text-primary text-xl">
          Our Design & Development Services
        </h1>
      </div>
      <ServiceItems></ServiceItems>
    </div>
  );
};

export default Services;
