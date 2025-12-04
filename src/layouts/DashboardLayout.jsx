import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { RiChatSettingsLine, RiSidebarUnfoldFill } from "react-icons/ri";
import logo from "../assets/logo.png";
import { TbLayoutDashboardFilled, TbTruckDelivery } from "react-icons/tb";
import { BiSolidDetail } from "react-icons/bi";
import { LuSettings2 } from "react-icons/lu";
import {
  MdHistory,
  MdLibraryAdd,
  MdPassword,
} from "react-icons/md";
import { MdOutlineHelp } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { FaRegCreditCard } from "react-icons/fa";

const DashboardLayout = () => {
  const menuLinks = (
    <>
      <NavLink
        to={"/dashboard/myParcels"}
        className={({ isActive }) =>
          isActive
            ? "btn bg-[#CAEB66] rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
            : "btn btn-ghost is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        }
        data-tip="Dashboard"
      >
        <TbLayoutDashboardFilled size={25} />
        <span className="is-drawer-close:hidden text-lg">Dashboard</span>
      </NavLink>
      <NavLink
        to={"/dashboard/addParcel"}
        className={({ isActive }) =>
          isActive
            ? "btn bg-[#CAEB66] rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
            : "btn btn-ghost is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        }
        data-tip="Add Parcel"
      >
        <MdLibraryAdd size={25} />
        <span className="is-drawer-close:hidden text-lg">Add Parcel</span>
      </NavLink>
      <NavLink
        to={"/dashboard/paymentHistory"}
        className={({ isActive }) =>
          isActive
            ? "btn bg-[#CAEB66] rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
            : "btn btn-ghost is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        }
        data-tip="Payment History"
      >
        <FaRegCreditCard size={25} />
        <span className="is-drawer-close:hidden text-lg">Payment History</span>
      </NavLink>

      <NavLink
        to={"/dashboard/parcelDetails"}
        className={({ isActive }) =>
          isActive
            ? "btn bg-[#CAEB66] rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
            : "btn btn-ghost is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        }
        data-tip="Parcel Details"
      >
        <BiSolidDetail size={25} />
        <span className="is-drawer-close:hidden text-lg">Parcel Details</span>
      </NavLink>
      <NavLink
        to={"/dashboard/manageParcel"}
        className={({ isActive }) =>
          isActive
            ? "btn bg-[#CAEB66] rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
            : "btn btn-ghost is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        }
        data-tip="Manage Parcel"
      >
        <RiChatSettingsLine size={25} />
        <span className="is-drawer-close:hidden text-lg">Manage Parcel</span>
      </NavLink>
      <NavLink
        to={"/dashboard/allDeliveries"}
        className={({ isActive }) =>
          isActive
            ? "btn bg-[#CAEB66] rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
            : "btn btn-ghost is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        }
        data-tip="All Deliveries"
      >
        <TbTruckDelivery size={25} />
        <span className="is-drawer-close:hidden text-lg">All Deliveries</span>
      </NavLink>
    </>
  );
  const generalLinks = (
    <>
      <Link
        to={"/dashboard/settings"}
        className="btn btn-ghost rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        data-tip="Settings"
      >
        <LuSettings2 size={25} />
        <span className="is-drawer-close:hidden text-lg">Settings</span>
      </Link>
      <button
        className="btn btn-ghost rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        data-tip="Change Password"
      >
        <MdPassword size={25} />
        <span className="is-drawer-close:hidden text-lg">Change Password</span>
      </button>
      <NavLink
        to={"/dashboard/help"}
        className={({ isActive }) =>
          isActive
            ? "btn bg-[#CAEB66] rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
            : "btn btn-ghost is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        }
        data-tip="Help"
      >
        <MdOutlineHelp size={25} />
        <span className="is-drawer-close:hidden text-lg">Help</span>
      </NavLink>
      <button
        className="btn btn-ghost rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        data-tip="Logout"
      >
        <HiOutlineLogout size={25} />
        <span className="is-drawer-close:hidden text-lg">Logout</span>
      </button>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <RiSidebarUnfoldFill size={20} />
          </label>
          <Link to={"/"} className="relative">
            <h2 className="text-2xl md:text-3xl font-extrabold ml-3 p-3">
              ZapShift
            </h2>
            <img src={logo} alt="logo" className="absolute -top-2 p-1" />
          </Link>
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 lg:is-drawer-close:w-full lg:is-drawer-open:w-full">
          {/* Sidebar content here */}
          <ul className="menu w-full grow gap-2">
            {/* List item */}
            <h1>MENU</h1>
            {menuLinks}
            <h1>GENERAL</h1>
            {generalLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
