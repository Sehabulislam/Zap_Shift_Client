import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2" : "text-gray-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/services"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2" : "text-gray-500"
        }
      >
        Services
      </NavLink>
      <NavLink
        to={"/coverage"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2" : "text-gray-500"
        }
      >
        Coverage
      </NavLink>
      <NavLink
        to={"/aboutUs"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2" : "text-gray-500"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to={"/pricing"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2" : "text-gray-500"
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to={"/aRider"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2" : "text-gray-500"
        }
      >
        Be a Rider
      </NavLink>
    </>
  );
  return (
     <div className="navbar rounded-2xl mb-2 bg-base-100 md:w-11/12 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow gap-2 text-lg"
          >
            {links}
          </ul>
        </div>
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-extrabold ml-3 p-3">ZapShift</h2>
          <img src={logo} alt="logo" className="absolute -top-2 p-1" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 text-lg">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn p-5 text-lg">Button</a> */}
        <Link to={'/login'} className="btn btn-neutral btn-outline rounded-lg md:p-5 md:text-lg text-gray-600 hover:text-white border-gray-400 shadow-none mr-2">Sign In</Link>
        <Link className="btn bg-[#CAEB66] rounded-lg text md:p-5 md:text-lg">Be a rider</Link>
      </div>
    </div>
  );
};

export default Navbar;
