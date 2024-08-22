import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

const NavBar = ({ setShowSearch, showSearch }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium border-b-2">
        <p className="text-3xl font-serif border-b-2 border-double border-black ">
          ShopFerry...
        </p>
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          {/* Navigation links */}
          <NavLink to={"/"} className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to={"/collection"} className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to={"/about"} className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-6">
          {/* Search, profile, cart, and admin buttons */}
          <img
            onClick={() => setShowSearch(!showSearch)}
            className="w-5 cursor-pointer"
            src={assets.search_icon}
            alt=""
          />
          <div className="group relative">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt="profile icon"
            />
            <div className="group-hover:block hidden absolute dropdown-menu pt-4 right-0">
              <div className="bg-slate-100 flex flex-col gap-2 py-3 px-5 w-36 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to={"/cart"}>
            <img
              className="w-5 cursor-pointer relative"
              src={assets.cart_icon}
              alt=""
            />
            <p className="absolute flex justify-center items-center w-4 h-4 rounded-full text-white bg-slate-600 p-[2px] -mt-3 ml-2">
              10
            </p>
          </Link>
          <img
            className="w-5 cursor-pointer block sm:hidden"
            src={assets.menu_icon}
            alt="menu icon"
            onClick={() => setShowSidebar(true)}
          />

          {/* Admin button */}
          <div className="group relative hidden sm:block">
            <button className="px-2 py-1 border-slate-500 border rounded text-slate-600 cursor-pointer" type="button">
              Admin
            </button>
            <div className="group-hover:block hidden absolute dropdown-menu pt-4 right-0">
              <div className="bg-slate-100 flex flex-col gap-2 py-3 px-5 w-36 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">
                  If you're admin visit ---
                </p>
                <Link>
                  <button
                    className="px-1 py-1 border-slate-500 border rounded text-slate-600 cursor-pointer font-thin"
                    type="button"
                  >
                    Admin Page...
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <div className="p-6 flex justify-between items-center border-b-2">
          <p className="text-2xl font-serif">ShopFerry...</p>
          <button
            onClick={() => setShowSidebar(false)}
            className="text-xl font-semibold"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col gap-5 p-5 text-sm text-gray-700">
          <NavLink to={"/"} onClick={() => setShowSidebar(false)}>
            HOME
          </NavLink>
          <NavLink to={"/collection"} onClick={() => setShowSidebar(false)}>
            COLLECTION
          </NavLink>
          <NavLink to={"/about"} onClick={() => setShowSidebar(false)}>
            ABOUT
          </NavLink>
          <NavLink to={"/contact"} onClick={() => setShowSidebar(false)}>
            CONTACT
          </NavLink>
          <Link>
             ADMIN
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
