import React from "react";
import { GrClose } from "react-icons/gr";
import { sideBarLinks } from "../data";
import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();
  return (
    <aside
      className={
        isSideBarOpen
          ? `xxs:fixed bg-navBg top-0 left-0 translate-x-[0] w-[100%] sm:h-[100%]  sm:z-20  sm:w-[80%] xlg:w-[10rem] large:w-[13rem] lg:relative lg:w-[12rem]  md:w-[70%] exl:w-[13rem] transition z-20 `
          : `xxs:fixed bg-navBg top-0 left-0 translate-x-[-150%] w-[100%] sm:h-[100%]  sm:z-20  sm:w-[80%] xlg:w-[10rem] large:w-[13rem] lg:relative lg:translate-x-[0] lg:w-[12rem]  md:w-[70%] exl:w-[13rem] transition z-20`
      }
    >
      <div className="flex flex-col pb-[50rem] pt-20 lg:pt-10">
        {/* close btn  */}
        <button
          className=" lg:hidden lg:top-0 absolute top-9 right-12 text-2xl "
          onClick={closeSideBar}
        >
          <GrClose />
        </button>
        {/* end of close btn  */}
        {/* heading  */}
        <h3 className="pl-6  md:pl-10 lg:pl-2 mt-2 font-700  text-[.97rem]">
          POS Monitoring
        </h3>
        {/* sidebar-links  */}
        <ul>
          {sideBarLinks.map(function (link) {
            const { id, page, icon, url, dropdown } = link;
            return (
              <li
                key={id}
                className="pl-6 md:pl-10 lg:pl-3 large:pr-9 flex  gap-1 large:gap-5  items-center"
              >
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    isActive
                      ? "flex mt-6 space-x-2 text-blue"
                      : "flex mt-6 space-x-2"
                  }
                  onClick={closeSideBar}
                >
                  <img src={icon} alt={page} />
                  <p className="text-sm">{page}</p>
                </NavLink>
                <buton className="mt-7">{dropdown}</buton>
              </li>
            );
          })}
        </ul>
        {/*end of sidebar-links  */}
      </div>
    </aside>
  );
};

export default Sidebar;
