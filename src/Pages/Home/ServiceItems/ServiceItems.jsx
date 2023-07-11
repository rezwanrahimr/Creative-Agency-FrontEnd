import { useQuery } from "react-query";
import shape from "../../../assets/images/shape-7.svg";
import "./ServiceItem.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ServiceItems = () => {
  //   Load services items
  const { data: services, isLoading } = useQuery({
    queryKey: "",
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/service");
      const data = await res.json();
      return data;
    },
  });

  isLoading && <h1>Loading..</h1>;
  return (
    <div className="service-items mx-20">
      <div className="service-items-card">
        {services?.slice(0, 3).map((service) => (
          <div
            key={service.id}
            className="card service-card  bg-base-100 shadow-xl"
          >
            <figure className="px-10 card-img">
              <img src={service?.photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center px-5">
              <h2 className="card-title">{service?.title}</h2>
              <p>{service?.subTitle}</p>
              <Link className="card-actions">
                Learn More{" "}
                <FontAwesomeIcon
                  icon={faAngleRight}
                  beatFade
                  style={{ color: "#111430", margin: "3px 0 0 8px" }}
                />
              </Link>

              <div className="card-shape">
                <img src={shape} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceItems;
