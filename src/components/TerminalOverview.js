import React from "react";
import { TerminalHealth } from "../data";
import BarChart from "./Chart";
import Table from "./Table";

const TerminalOverview = () => {
  return (
    // overview-center
    <div className="mt-14 md:pl-0 ">
      {/* terminalhealth center  */}
      <div>
        {/* heading  */}
        <h3 className="text-[1.5rem] pl-16 font-700 lg:pl-0 md:pl-0">
          Terminal Overview
        </h3>
        {/* end of heading */}
      </div>

      {/* overview  */}
      <div className=" xxs:pl-8 flex pl-16 lg:pl-0 flex-col mx-auto max-w-md md:mx-0 smax:max-w-6xl space-y-8 mt-7 smax:grid smax:grid-cols-2 smax:space-y-0 smax:gap-3 large:gap-1 large:grid-cols-4 md:pl-0  ">
        {TerminalHealth.map(function (item) {
          const { id, overview, icon } = item;
          return (
            <article
              key={id}
              className="flex space-x-3 bg-white shadow-sm w-[80%] h-[5rem] smax:w-[90%] rounded-lg px-[1.2rem]  items-center large:w-[95%] large:mr-12  "
            >
              <img src={icon} alt={overview} />
              <p>{overview}</p>
            </article>
          );
        })}
      </div>
      {/* end of overview  */}

      {/* // chart and Data  */}
      <div className="mt-10 lg:pl-0 large:flex large:items-center large:mt-4 large:gap-[.5rem] exl:gap-[.4rem] ">
        {/* chart  */}
        <div className="pl-16 lg:pl-0 md:pl-0 xxs:pl-8 ">
          <BarChart />
        </div>

        {/* Table  */}
        <div className="md:pl-0 lg:pl-0 smd:pl-4  ">
          <Table />
        </div>
      </div>
      {/* // end of charts and Data  */}
    </div>
    // end of overview center
  );
};

export default TerminalOverview;
