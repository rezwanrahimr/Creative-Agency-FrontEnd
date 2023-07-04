import logo from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  let navItems = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/ourPortfolio">OUR PORTFOLIO</Link>
      </li>
      <li>
        <Link to="/ourTeam">OUR TEAM</Link>
      </li>
      <li>
        <Link to="/contactUs">CONTACT US</Link>
      </li>
      <li>
        <Link to="/dashboard">DASHBOARD</Link>
      </li>
      <li>
        <Link to="/login" className="bg-primary text-white user-btn">
          LOGIN
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar px-10">
      <div className="navbar-start w-2/5 ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="company-logo" src={logo} alt="Company Logo" />
        </a>
      </div>

      <div className="navbar-end hidden lg:flex w-3/5">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
