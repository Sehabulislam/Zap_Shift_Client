import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { RiSidebarUnfoldFill } from "react-icons/ri";
import logo from "../assets/logo.png";
import { TbLayoutDashboardFilled, TbTruckDelivery } from "react-icons/tb";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoStorefrontSharp } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { PiMapPinAreaFill } from "react-icons/pi";
import { LuSettings2 } from "react-icons/lu";
import { MdPassword } from "react-icons/md";
import { MdOutlineHelp } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

const DashboardLayout = () => {
  const menuLinks = (
    <>
      <NavLink
        to={"/dashboard"}
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
        to={"/dashboard/deliveries"}
        className={({ isActive }) =>
          isActive
            ? "btn bg-[#CAEB66] rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
            : "btn btn-ghost is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        }
        data-tip="Deliveries"
      >
        <TbTruckDelivery size={25} />
        <span className="is-drawer-close:hidden text-lg">Deliveries</span>
      </NavLink>
      <NavLink
        to={"/dashboard/invoices"}
        className={({ isActive }) =>
          isActive
            ? "btn bg-[#CAEB66] rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
            : "btn btn-ghost is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        }
        data-tip="Invoices"
      >
        <LiaFileInvoiceSolid size={25} />
        <span className="is-drawer-close:hidden text-lg">Invoices</span>
      </NavLink>
      <NavLink
        to={"/dashboard/stores"}
        className={({ isActive }) =>
          isActive
            ? "btn bg-[#CAEB66] rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
            : "btn btn-ghost is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        }
        data-tip="Stores"
      >
        <IoStorefrontSharp size={25} />
        <span className="is-drawer-close:hidden text-lg">Stores</span>
      </NavLink>
      <NavLink
        to={"/dashboard/pricingPlan"}
        className={({ isActive }) =>
          isActive
            ? "btn bg-[#CAEB66] rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
            : "btn btn-ghost is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        }
        data-tip="Pricing Plan"
      >
        <IoIosPricetags size={25} />
        <span className="is-drawer-close:hidden text-lg">Pricing Plan</span>
      </NavLink>
      <NavLink
        to={"/dashboard/coverageArea"}
        className={({ isActive }) =>
          isActive
            ? "btn bg-[#CAEB66] rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
            : "btn btn-ghost is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center"
        }
        data-tip="Coverage Area"
      >
        <PiMapPinAreaFill size={25} />
        <span className="is-drawer-close:hidden text-lg">Coverage Area</span>
      </NavLink>
    </>
  );
  const generalLinks = (
    <>
      <Link to={'/dashboard/settings'}
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
