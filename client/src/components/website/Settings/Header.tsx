import React from "react";

interface Props {
  setTab: (x: any) => void;
}

export const Header = ({ setTab }: Props) => {
  const options = [
    {
      title: "Dashboard",
      index: 0,
    },
    {
      title: "Deposit",
      index: 1,
    },
    {
      title: "Withdraw",
      index: 2,
    },
    {
      title: "Transfer",
      index: 3,
    },
    {
      title: "Support",
      index: 4,
    },
  ];

  return (
    <div className="flex bg-[#567BDA] justify-center items-center rounded-t-xl">
      {options.map((opt, index) => {
        return (
          <button className="mx-2.5 py-2.5 " onClick={() => setTab(opt.index)}>
            <h1 className="text-md text-white font-semibold" key={index}>
              {opt.title}
            </h1>
          </button>
        );
      })}
    </div>
  );
};
