import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { data, columns, customStyles } from "../data";

const Table = () => {
  return (
    <div className="mt-16 pl-0 relative bg-white rounded-md w-[100%] smd:w-[99%] max-w-3xl exl:w-[35rem] large:w-[500px]">
      {/* Table-center  */}
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        className="pb-12 p-2 w-[100%] h-[100%] smd:p-8  smd:pb-12"
      ></DataTable>
      <div>
        {/* button  */}
        <div className>
          <button className="p-2  rounded-md text-sm text-white bg-btnBlue absolute bottom-[1rem] smax:bottom-[.5rem] right-[2rem] mt-4  ">
            View Details
          </button>
        </div>
        {/* end of button  */}
      </div>
      {/* end of Table center  */}
    </div>
  );
};

export default Table;
