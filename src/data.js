import icon1 from "./images/dollar-square.svg";
import icon2 from "./images/POS.svg";
import icon3 from "./images/grey-dollar-square.svg";

import icon4 from "./images/BatteryStatus.svg";
import icon5 from "./images/paperStatus.svg";
import icon6 from "./images/called.svg";
import icon7 from "./images/Activicty.svg";

import icon8 from "../src/images/Dashboard.svg";
import icon9 from "./images/sidebarsquare.svg";
import icon10 from "./images/health.svg";
import icon11 from "./images/settlement.svg";
import icon12 from "./images/performance.svg";
import icon13 from "./images/Frame 38706.svg";
import icon14 from "./images/shopping-pos-machine-svgrepo-com 1.svg";
import icon15 from "./images/settings.svg";
import icon16 from "./images/message.svg";
import icon17 from "./images/reconcilation.svg";
import icon18 from "./images/Group 51.svg";
import { SlArrowDown } from "react-icons/sl";

export const Months = [
  "January",
  "Februrary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Terminals = [
  {
    id: 1,
    type: "Total Terminals",
    icon: icon1,
    number: 120,
    percentage: "100%",
  },
  {
    id: 2,
    type: "Transacting Terminals",
    icon: icon2,
    number: 48,
    percentage: "37%",
  },
  {
    id: 3,
    type: "Active Terminals",
    icon: icon2,
    number: 62,
    percentage: "43%",
  },
  {
    id: 4,
    type: "Inactive Terminals",
    icon: icon3,
    number: 10,
    percentage: "20%",
  },
];

export const TerminalHealth = [
  { id: 1, overview: "Battery Health", icon: icon4 },
  { id: 2, overview: "Paper Status", icon: icon5 },
  { id: 3, overview: "Called Home Status", icon: icon6 },
  { id: 4, overview: "Activicty Status", icon: icon7 },
];

export const DataTable = [
  {
    id: 1,
    heading: "PTSP",
    column1: "Intfilifin",
    column2: 13,
    column3: 10,
    column4: 3,
  },
  {
    id: 2,
    heading: "Number Of Terminal",
    column1: "ITFX",
    column2: 26,
    column3: 20,
    column4: 6,
  },
  {
    id: 3,
    heading: "Ok",
    column1: "UP",
    column2: 50,
    column3: 45,
    column4: 5,
  },
  {
    id: 4,
    heading: "Not Ok",
    column1: "CITISERVE",
    column2: 21,
    column3: 20,
    column4: 1,
  },
  {
    id: 5,
    heading: "",
    column1: "Global Accelerex Ltd",
    column2: 11,
    column3: 11,
    column4: 0,
  },
];

export const sideBarLinks = [
  {
    id: 1,
    page: "Dashboard",
    icon: icon8,
    url: "/",
    dropdown: <SlArrowDown />,
  },
  {
    id: 2,
    page: "Transaction",
    icon: icon9,
    url: "/transaction",
    dropdown: <SlArrowDown />,
  },
  {
    id: 3,
    page: "Terminal Health",
    icon: icon10,
    url: "/terminalHealth",
    dropdown: <SlArrowDown />,
  },
  {
    id: 4,
    page: "Settlement",
    icon: icon11,
    url: "/settlements",
    dropdown: <SlArrowDown />,
  },
  {
    id: 5,
    page: "Performance",
    icon: icon12,
    url: "/performance",
    dropdown: "",
  },
  { id: 6, page: "Bank Statement", icon: icon13, url: "/bank", dropdown: "" },
  {
    id: 7,
    page: "My Terminals",
    icon: icon14,
    url: "/terminals",
    dropdown: <SlArrowDown />,
  },
  { id: 8, page: "Settings", icon: icon15, url: "/setting", dropdown: "" },
  {
    id: 9,
    page: "Message Center",
    icon: icon16,
    url: "/message",
    dropdown: "",
  },
  {
    id: 10,
    page: "Reconcilation",
    icon: icon17,
    url: "/reconcilation",
    dropdown: "",
  },
  {
    id: 11,
    page: "Dispute Management",
    icon: icon18,
    url: "/management",
    dropdown: "",
  },
];

export const columns = [
  {
    name: "PTSPs",
    selector: (row) => row.PTSPs,
  },
  {
    name: "Terminals",
    selector: (row) => row.Terminals,
  },
  {
    name: "Ok",
    selector: (row) => row.Ok,
  },
  {
    name: "NotOk",
    selector: (row) => row.NotOk,
  },
];

export const data = [
  {
    id: 1,
    PTSPs: "Intfilifin",
    Terminals: 13,
    Ok: 10,
    NotOk: 3,
  },
  {
    id: 2,
    PTSPs: "ITFX",
    Terminals: 26,
    Ok: 20,
    NotOk: 6,
  },
  {
    id: 3,
    PTSPs: "UP",
    Terminals: 50,
    Ok: 45,
    NotOk: 5,
  },
  {
    id: 4,
    PTSPs: "CITISERVE",
    Terminals: 21,
    Ok: 20,
    NotOk: 1,
  },
  {
    id: 5,
    PTSPs: "Global Accelerex Ltd",
    Terminals: 11,
    Ok: 11,
    NotOk: 0,
  },
];

export const customStyles = {
  rows: {
    style: {
      minHeight: "40px",
      background: "#FBFCFD",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      background: "#EDF1FF",
      fontSize: "1rem",
      fontWeight: 700,
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};

export const Bardata = {
  labels: ["Intfilifin", "ITFX", "UP", "CITISERVE", "Global Accelerex Ltd"],
  datasets: [
    {
      label: "Ok",
      data: [125, 25, 75, 50, 38],
      backgroundColor: "#3DD154",
      borderWidth: 0.5,
      barThickness: 10,
      pointStyle: "circle",
    },
    {
      label: "Not Ok",
      data: [50, 8, 48, 25, 8],
      backgroundColor: "#E34A4A",
      borderWidth: 0.5,
      barThickness: 10,
      pointStyle: "circle",
    },
  ],
};

export const Baroptions = {
  aspectRatio: 1.8,
  plugins: {
    legend: false,
  },
  scales: {
    y: {
      ticks: {
        min: 0,
        max: 150,
        stepSize: 50,
      },
      grid: {
        display: true,
        color: "#F6F8F9",
        borderColor: "#F6F8F9",
      },
    },
    x: {
      grid: {
        display: false,
        borderColor: "#F6F8F9",
      },
    },
  },
};

export const Linedata = {
  labels: [
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12am",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",
  ],
  datasets: [
    {
      data: [
        0, 60, 0, 80, 120, 120, 60, 40, 100, 140, 40, 20, 80, 120, 120, 20, 40,
        20, 120, 60, 60, 80, 40,
      ],
      borderColor: "#3DD154",
      backgroundColor: "#3DD154",
      borderWidth: 2.6,
      barThickness: 20,
    },
  ],
};

export const Lineoptions = {
  aspectRatio: 1.8,
  responsive: true,
  plugins: {
    legend: false,
  },
  y: {
    position: "right",
  },
};
