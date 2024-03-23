import React from "react";
import OSRS from "../../../assets/OSRS_logo.png";
import RS3 from "../../../assets/RS3_logo.png";

export const Withdraw = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl text-[#EEEEEE]">WITHDRAW OPTIONS</h1>
      <h1 className="text-[#BBBBBB] text-xl mt-5 mb-4">RS Gold</h1>
      <div className="flex">
        <div className="bg-[#223D53] p-8 rounded-2xl">
          <img className="h-[90px]" src={OSRS} alt="OSRS LOGO" />
        </div>
        <div className="bg-[#223D53] ml-8 p-8 rounded-2xl">
          <img className="h-[105px]" src={RS3} alt="RS3 LOGO" />
        </div>
      </div>
    </div>
  );
};
