import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  MessageCenter,
  BankStatement,
  DisputeManagement,
  MyTerminals,
  Reconcilation,
  Settings,
  TerminalHealth,
  Transaction,
  Settlements,
  Performance,
} from "./Pages/index";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex  ">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bank" element={<BankStatement />} />
          <Route path="message" element={<MessageCenter />} />
          <Route path="management" element={<DisputeManagement />} />
          <Route path="terminals" element={<MyTerminals />} />
          <Route path="reconcilation" element={<Reconcilation />} />
          <Route path="settings" element={<Settings />} />
          <Route path="terminalHealth" element={<TerminalHealth />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="settlements" element={<Settlements />} />
          <Route path="performance" element={<Performance />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
