import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { TbMenu4 } from "react-icons/tb";

const Navbar = () => {
  const { user, setUser, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "bg-[#CAEB66] py-3 px-5 rounded-full text-lg" : "text-gray-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/services"}
        className={({ isActive }) =>
          isActive ? "bg-[#CAEB66] py-3 px-5 rounded-full text-lg" : "text-gray-500"
        }
      >
        Services
      </NavLink>
      <NavLink
        to={"/coverage"}
        className={({ isActive }) =>
          isActive ? "bg-[#CAEB66] py-3 px-5 rounded-full text-lg" : "text-gray-500"
        }
      >
        Coverage
      </NavLink>
      <NavLink
        to={"/aboutUs"}
        className={({ isActive }) =>
          isActive ? "bg-[#CAEB66] py-3 px-5 rounded-full text-lg" : "text-gray-500"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to={"/pricing"}
        className={({ isActive }) =>
          isActive ? "bg-[#CAEB66] py-3 px-5 rounded-full text-lg" : "text-gray-500"
        }
      >
       Pricing
      </NavLink>
      <NavLink
        to={"/sendParcel"}
        className={({ isActive }) =>
          isActive ? "bg-[#CAEB66] py-3 px-5 rounded-full text-lg" : "text-gray-500"
        }
      >
        Send Parcel
      </NavLink>
      <NavLink
        to={"/rider"}
        className={({ isActive }) =>
          isActive ? "bg-[#CAEB66] py-3 px-5 rounded-full text-lg" : "text-gray-500"
        }
      >
        Be a Rider
      </NavLink>
    </>
  );
  return (
    <div className="navbar rounded-b-2xl mb-2 bg-base-100 lg:w-11/12 lg:mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <TbMenu4 size={30}/>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 ml-2 w-50 p-2 shadow gap-2 text-lg"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="relative">
          <h2 className="text-2xl md:text-3xl font-extrabold ml-3 p-3">
            ZapShift
          </h2>
          <img src={logo} alt="logo" className="absolute -top-2 p-1" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 flex items-center text-lg">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL ||
                    "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-60 p-2 shadow gap-3"
            >
              <li className="text-xl font-bold">{user?.displayName}</li>
              <li className="font-semibold text-wrap">{user?.email}</li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn btn-soft btn-error hover:text-white"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to={"/login"}
              className="btn btn-neutral btn-outline rounded-lg md:p-5 md:text-lg text-gray-600 hover:text-white border-gray-400 shadow-none mr-2"
            >
              Sign In
            </Link>
            <Link
              to={"/rider"}
              className="btn bg-[#CAEB66] rounded-lg text md:p-5 md:text-lg"
            >
              Be a rider
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
