import React from "react";
import greenCircle from "../images/green-circle.svg";
import redCircle from "../images/redCircle.svg";
import { Bardata, Baroptions } from "../data";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  return (
    <div className=" p-12 relative w-[24rem]  smd:w-[29rem] exl:w-[30rem] smax:w-[35rem]  md:w-[38rem] lg:w-[45rem] large:w-[25rem] large:h-[20rem] bg-white shadow-sm pt-20 px-8 large:mt-[4rem] exl:w-[28rem]">
      <Bar data={Bardata} options={Baroptions}>
        {" "}
      </Bar>
      <div className="absolute top-0 right-0 p-4 smd:top-0 smd:right-[3rem] smax:top-0 smax:right-[3.5rem]">
        <h3 className="font-600 text-[1.4rem]">Battery status overview</h3>
        <p className="font-400 text-navToggle text-sm">
          Number of terminals per PTSPS
        </p>
      </div>

      {/* legend  */}
      <div className="mt-4 flex gap-12">
        {/* ok legend  */}
        <article className="flex items-center gap-2 w-[1rem]">
          <img src={greenCircle} alt="green" className="w-[100%]" />
          <p>Ok</p>
        </article>
        {/* ok legend  */}

        {/* not ok  */}
        <article className="flex items-center gap-2 w-[1rem]">
          <img src={redCircle} alt="green" className="w-[100%]" />
          <p>NotOk</p>
        </article>
        {/* not legend  */}
      </div>
    </div>
  );
};

export default BarChart;
