import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Components/Loading/Loading";

const AllOrder = () => {
  const [status, setStatus] = useState([]);

  // Load all user order.
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["all-order"],
    queryFn: async () => {
      const res = await fetch(
        "https://creative-agency-backend-henna.vercel.app/all-order"
      );
      const data = await res.json();
      return data;
    },
  });

  const statusData = ["On going", "Pending", "Done"];
  let test = [];

  useEffect(() => {
    let updateStatus = status[1];
    status[0] !== undefined &&
      fetch(
        `https://creative-agency-backend-henna.vercel.app/order/${status[0]}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ updateStatus }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            refetch();
          }
        });
  }, [status]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs md:table-lg">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>

            <th>Service</th>
            <th>Project Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data?.map((element) => (
            <tr key={element._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{element.name}</div>
                    <div className="text-sm opacity-50">{element.email}</div>
                  </div>
                </div>
              </td>

              <td>{element.serviceName}</td>
              <td>
                <span>{element.projectDetails?.slice(0, 35)}...</span>
              </td>
              <td>
                <select
                  onChange={(e) => setStatus([element._id, e.target.value])}
                  className={`select max-w-xs ${
                    element.status == "Done"
                      ? "bg-green-500 text-white"
                      : element.status == "Pending"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-300"
                  }`}
                >
                  <option selected>{element.status}</option>
                  {
                    (test = statusData.filter(
                      (items) => element.status !== items
                    ))
                  }
                  {test.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrder;
