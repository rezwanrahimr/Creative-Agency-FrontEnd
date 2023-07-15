import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContexts } from "../Context/AuthContext";
import {
  faCartShopping,
  faCommentDots,
  faPlus,
  faShopLock,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { useQuery } from "react-query";

const Dashboard = () => {
  const { user } = useContext(AuthContexts);

  //
  const { data: currentUser } = useQuery({
    queryKey: ["user-admin", user],
    queryFn: async () => {
      const res = await fetch(
        `https://creative-agency-backend-henna.vercel.app/user-admin?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <>
      <Navbar></Navbar>
      <>
        <div className="drawer lg:drawer-open pt-24">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-start justify-start ps-8 pt-8 bg-slate-100">
            {/* Page content here */}
            <Outlet></Outlet>
          </div>
          <div className="drawer-side z-10">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-60 h-full bg-white text-base-content font-medium text-base">
              {/* Sidebar content here */}
              <li>
                <Link to="/dashboard">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Order
                </Link>
              </li>
              <li>
                <Link to="/dashboard/service">
                  <FontAwesomeIcon icon={faShopLock} />
                  Service list
                </Link>
              </li>
              <li>
                <Link to="/dashboard/review">
                  <FontAwesomeIcon icon={faCommentDots} />
                  Review
                </Link>
              </li>
              {currentUser?.role == "Admin" && (
                <>
                  <li>
                    <Link to="/dashboard/allOrder">
                      <FontAwesomeIcon icon={faShopLock} />
                      Service list
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addService">
                      <FontAwesomeIcon icon={faPlus} />
                      Add Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/makeAdmin">
                      <FontAwesomeIcon icon={faUserPlus} />
                      Make Admin
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </>
    </>
  );
};

export default Dashboard;
