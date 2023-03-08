import React from "react";

const Terminals = ({ id, icon, number, percentage, type }) => {
  return (
    <>
      <div className="mx-auto max-w-sm  md:mx-0 smax:w-[95%]  large:w-[15rem]">
        <div className=" mt-8 bg-white shadow-sm rounded-md p-4 ">
          {/* terminal type  */}
          <div className="flex gap-[1rem]">
            <img src={icon} alt={type} />
            {type}
          </div>
          {/* end of terminal type  */}

          {/* percentage  */}
          <div className="flex space-x-12 mt-7 justify-between">
            <h3 className="text-[1.8rem] font-600 textcolor4">{number}</h3>
            <p className="font-700 text-[#879FFF] self-center ">{percentage}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminals;
