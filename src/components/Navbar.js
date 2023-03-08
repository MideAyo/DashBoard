import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import logo from "../images/Pavilion.svg";
import { CiSearch } from "react-icons/ci";
import notification from "../images/notification.svg";
import profile from "../images/Profile.svg";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSideBar } = useGlobalContext();

  return (
    <nav className="fixed w-[100%] bg-navBg sm:relative z-10">
      {/* nav-center  */}
      <div className=" p-4 flex items-center justify-between gap-20 w-[full]">
        {/* navheader and search field  */}
        <div className="flex items-center gap-6 md:gap-16">
          {/* menu and logo  */}
          <article className="flex items-center gap-[.8rem]">
            {/* menu  */}
            <button type="button" onClick={openSideBar}>
              <MdMenu className="text-3xl sm:text-3xl" />
            </button>
            {/* logo  */}
            <div className="w-18 xxs:w-[70px] xs:w-[90px] sm:w-[90px]">
              <img src={logo} alt="logo" className="w-1/1" />
            </div>
          </article>
          {/* menu and logo  */}
          {/* search field  */}
          <article className="relative flex items-center">
            <CiSearch className="absolute text-2xl ml-2 text-navToggle" />
            <input
              type="text"
              placeholder="Search"
              className=" pr-[1rem] pl-9 border placeholder:text-navToggle placeholder:text-md focus:outline-none p-[.4rem] rounded-md xxs:w-[100px] xs:w-[100px] sm:w-[100px] smax:w-[280px] smd:w-[200px] md:w-[350px]"
            />
          </article>
        </div>
        {/* navheader and searchfield  */}

        {/* notification and profile  */}
        <div className="flex items-center ">
          {/* notification  */}
          <button className="w-[40px] relative">
            <img src={notification} alt="notification" />
            <div className="border absolute border-red w-[.6rem] h-[.6rem] bg-red rounded-xl top-0 left-0 xxs:top-0 xxs:left-[1rem]"></div>
          </button>
          {/* notification  */}
          {/* profile  */}
          <div>
            <button className="w-[40px]">
              <img src={profile} alt="profile" />
            </button>
          </div>
          {/* profile  */}
        </div>
        {/* notification and profile  */}
      </div>
    </nav>
  );
};

export default Navbar;
