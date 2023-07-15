import "./Footer.scss";
import logo from "../../assets/logos/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-white-200 text-base-content text-base">
        <div>
          <img width="100" height="100" src={logo} alt="" />
          <p>
            Creative Agency Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Refund Policy</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center   text-base-content text-base">
        <div>
          <p>
            Copyright © 2023 - All right reserved by{" "}
            <span className="font-bold">Creative Agency</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
