import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
