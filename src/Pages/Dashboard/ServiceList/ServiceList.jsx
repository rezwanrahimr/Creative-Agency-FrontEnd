import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContexts } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ServiceList = () => {
  const { user } = useContext(AuthContexts);
  const { data: services } = useQuery({
    queryKey: ["/order", user],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/order?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(services);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services?.length <= 0 ? (
        <h1 className="text-2xl font-bold text-primary">
          No Service Available ! <br />{" "}
          <Link to="/dashboard/order" className="text-secondary">
            Add Service <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </h1>
      ) : (
        services?.map((service) => (
          <div
            key={service._id}
            className="card w-80 md:w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <div className="flex justify-between">
                <img
                  src={
                    service?.serviceName == "Website Design & Development"
                      ? "https://i.ibb.co/58Tvy4F/Static-website-rafiki.png"
                      : service?.serviceName == "Mobile App Development"
                      ? "https://i.ibb.co/pQQY9P5/Mobile-bro.png"
                      : service?.serviceName == "Digital Marketing Service"
                      ? "https://i.ibb.co/BLkP3X4/Home-screen-cuate.png"
                      : ""
                  }
                  alt=""
                  width={"20%"}
                />
                <button
                  className={`btn text-primary ${
                    service?.status == "Done"
                      ? "bg-green-400"
                      : service?.status == "Pending"
                      ? "bg-yellow-400"
                      : "bg-red-300"
                  }`}
                >
                  {service.status}
                </button>
              </div>
              <h2 className="card-title">{service.serviceName}</h2>
              <p>{service.projectDetails}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ServiceList;
