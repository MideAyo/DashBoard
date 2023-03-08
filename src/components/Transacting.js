import React from "react";
import Footer from "./Footer";
import { Line } from "react-chartjs-2";
import { Linedata, Lineoptions } from "../data";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  return (
    // Line Chart
    <div className="mt-14 pl-16  xxs:pl-8 md:pl-0">
      <h3 className="font-700 text-[1.5rem] mb-8">Transacting Terminals</h3>

      {/* chart  */}
      <div className="bg-white w-[25rem] smd:w-[28rem] smax:w-[35rem] md:w-[38rem] lg:w-[45rem] xlg:w-[49rem] large:w-[52rem] exl:w-[57rem] rounded-md p-8 shadow-sm">
        <div className="mb-6">
          <h1 className="font-700 text-md">Terminal Hourly Distribution</h1>
          <p className="text-sm text-textcolor7">
            Number of terminals per hour
          </p>
        </div>
        <Line data={Linedata} options={Lineoptions} className="w-1/1"></Line>

        {/* chart footer  */}
        <Footer />
        {/* end of chart footer  */}
      </div>
    </div>
  );
};

export default LineChart;
