import React from "react";
import greenCircle from "../images/green-circle.svg";
import redCircle from "../images/redCircle.svg";

const Footer = () => {
  return (
    <div className="mt-5 flex justify-between ">
      {/* legend  */}
      <div className="flex items-center gap-2 w-[1rem]">
        <img src={greenCircle} alt="green" className="w-[100%]" />
        <p>Terminals</p>
      </div>
      {/* button  */}
      <div>
        <button className="p-2 rounded-md  text-sm text-white bg-btnBlue ">
          View Table
        </button>
      </div>
      {/* end of button  */}
    </div>
  );
};

export default Footer;
