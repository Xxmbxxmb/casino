import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { useLocation } from "react-router-dom";

export const Settings = () => {
  const [tab, setTab] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setTab(location.state);
  }, []);

  return (
    <div className="p-5 mx-24">
      <div className="rounded-t-xl bg-[#01162b] rounded-b-xl border-2 border-[#0d2436]">
        <Header setTab={setTab} />
        <Content id={tab} />
      </div>
    </div>
  );
};
