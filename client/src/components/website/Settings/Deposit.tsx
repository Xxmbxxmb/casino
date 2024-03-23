import React from "react";
import OSRS from "../../../assets/OSRS_logo.png";
import RS3 from "../../../assets/RS3_logo.png";

export const Deposit = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl text-[#EEEEEE]">DEPOSIT OPTIONS</h1>
      <h1 className="text-[#BBBBBB] text-xl mt-5 mb-4">RS Gold</h1>
      <div className="flex">
        <div className="bg-[rgba(34,61,83,0.4)] p-8 rounded-2xl">
          <img className="h-[90px]" src={OSRS} alt="OSRS LOGO" />
        </div>
        <div className="bg-[rgba(34,61,83,0.4)] ml-8 p-8 rounded-2xl">
          <img className="h-[105px]" src={RS3} alt="RS3 LOGO" />
        </div>
      </div>
    </div>
  );
};
