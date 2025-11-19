import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black px-3 py-10 text-white">
      <div className="">
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-extrabold ">ZapShift</h2>
          <img src={logo} alt="logo" className="absolute -top-4 -left-5" />
        </div>
        <p className="max-w-4xl text-sm md:text-lg">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <nav className="grid grid-flow-col gap-4 md:text-lg">
        <Link to={'/services'} className="link link-hover">Services</Link>
        <Link to={'/coverage'} className="link link-hover">Coverage</Link>
        <Link to={'/aboutUs'} className="link link-hover">About Us</Link>
        <Link to={'/pricing'} className="link link-hover">Pricing</Link>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <div className="grid grid-flow-col gap-4">
        <a>
          <FaLinkedinIn size={30} className="text-sky-500" />
        </a>
        <a>
          <FaXTwitter size={30} className="text-white" />
        </a>
        <a>
          <FaFacebook size={30} className="text-blue-500" />
        </a>
        <a>
          <FaYoutube size={38} className="text-red-500" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
