import React from "react";
import { Window } from "./Window";
import {
  ArrowLeftOnRectangleIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  GiftIcon,
  PaperAirplaneIcon,
  TicketIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export const Dashboard = () => {
  return (
    <div className="flex pt-5 mx-5">
      <div className="flex flex-col w-1/2 px-5">
        <Window title={"Account Status"}>
          <h1 className="text-base text-[#EEEEEE]">
            Member since: November 18th 2021, 2:17:03 am
          </h1>
          <h1>isVerified</h1>
          <label htmlFor="">CURRENCY</label>
          <div className="flex">
            <select name="" id="" defaultValue={"OSRS"}>
              <option value="OSRS">OSRS</option>
            </select>
            <select name="" id="">
              LALA
            </select>
          </div>
        </Window>

        <Window title={"Wallet and Activities"}>
          <div className="flex flex-col pl-4">
            <button className="flex mb-1.5 items-center">
              <TicketIcon className="h-5 w-5 mr-2" /> Tickets
            </button>
            <button className="flex mb-1.5 items-center">
              <BanknotesIcon className="h-5 w-5 mr-2" /> Transaction History
            </button>
            <button className="flex mb-1.5 items-center">
              <ArrowsRightLeftIcon className="h-5 w-5 mr-2" /> Exchange
            </button>
            <button className="flex mb-1.5 items-center">
              <PaperAirplaneIcon className="h-5 w-5 mr-2" /> Transfer
            </button>
            <button className="flex mb-1.5 items-center">
              <GiftIcon className="h-5 w-5 mr-2" /> Referrals and Rewards
            </button>
            <button className="flex mb-1.5 items-center">
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-2" /> Logout
            </button>
          </div>
        </Window>
      </div>
      <div className="flex flex-col w-1/2 px-5">
        <Window title={"Settings"}>
          <div className="flex flex-col pl-4">
            <button className="flex mb-1.5 items-center">
              <TicketIcon className="h-5 w-5 mr-2" /> Incognito Mode
            </button>
            <button className="flex mb-1.5 items-center">
              <BanknotesIcon className="h-5 w-5 mr-2" /> Transaction History
            </button>
            <button className="flex mb-1.5 items-center">
              <ArrowsRightLeftIcon className="h-5 w-5 mr-2" /> Exchange
            </button>
            <button className="flex mb-1.5 items-center">
              <PaperAirplaneIcon className="h-5 w-5 mr-2" /> Transfer
            </button>
            <button className="flex mb-1.5 items-center">
              <GiftIcon className="h-5 w-5 mr-2" /> Referrals and Rewards
            </button>
            <button className="flex mb-1.5 items-center">
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-2" /> Logout
            </button>
          </div>
        </Window>

        <Window title={"Recent Activities"}>
          <h1 className="text-base text-[#EEEEEE]">
            Member since: November 18th 2021, 2:17:03 am
          </h1>
          <h1>isVerified</h1>
          <label htmlFor="">CURRENCY</label>
          <div className="flex">
            <select name="" id="" defaultValue={"OSRS"}>
              <option value="OSRS">OSRS</option>
            </select>
            <select name="" id="">
              LALA
            </select>
          </div>
        </Window>
      </div>
    </div>
  );
};
