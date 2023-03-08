import React, { useContext, useState } from "react";
import { Months } from "./data";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [Active, setIsActive] = useState(true);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSideBarClose, setIsSideBarClose] = useState(false);

  const date = new Date().getDate();
  const month = Months[new Date().getMonth()];
  const year = new Date().getFullYear();

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        Active,
        isSideBarOpen,
        openSideBar,
        isSideBarClose,
        closeSideBar,
        date,
        month,
        year,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
