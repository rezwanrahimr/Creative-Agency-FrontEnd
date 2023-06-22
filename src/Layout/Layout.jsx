import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
