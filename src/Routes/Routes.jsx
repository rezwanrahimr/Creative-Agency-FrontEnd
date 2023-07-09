import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Order from "../Pages/Dashboard/Order/Order";
import Review from "../Pages/Dashboard/Review/Review";
import ServiceList from "../Pages/Dashboard/ServiceList/ServiceList";
import PrivateRoute from "../hooks/PrivateRoute";
import AllOrder from "../Pages/Dashboard/AllOrder/AllOrder";
import AddService from "../Pages/Dashboard/AddService/AddService";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import OurTeam from "../Pages/OurTeam/OurTeam/OurTeam";
import OurPortfolio from "../Pages/OurPortfolio/OurPortfolio/OurPortfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourPortfolio",
        element: <OurPortfolio></OurPortfolio>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/ourTeam",
        element: <OurTeam></OurTeam>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Order></Order>,
      },
      {
        path: "/dashboard/service",
        element: (
          <PrivateRoute>
            <ServiceList></ServiceList>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/review",
        element: (
          <PrivateRoute>
            <Review></Review>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allOrder",
        element: (
          <PrivateRoute>
            <AllOrder></AllOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);
export default router;
