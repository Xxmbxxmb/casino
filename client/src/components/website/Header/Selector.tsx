import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useAppSelector } from "../../../redux/hooks";
import { formatMillions } from "../../../utils/formatter";

const Selector = () => {
  const [open, setOpen] = useState(false);
  const { wallet } = useAppSelector((state) => state.user);
  const [selected, setSelected] = useState({
    amount: "",
    game: "",
  });

  const listOptions = [
    {
      amount: formatMillions(wallet?.osrs as number),
      onClick: () => {
        setSelected({
          amount: formatMillions(wallet?.osrs as number),
          game: "OSRS",
        });
        setOpen(false);
      },
      label: "OSRS",
    },
    {
      amount: formatMillions(wallet?.rs3 as number),
      onClick: () => {
        setSelected({
          amount: formatMillions(wallet?.rs3 as number),
          game: "RS3",
        });
        setOpen(false);
      },
      label: "RS3",
    },
  ];

  useEffect(() => {
    setSelected({
      game: "OSRS",
      amount: formatMillions(wallet?.osrs as number),
    });
  }, [wallet?.osrs, wallet?.rs3]);

  return (
    <div className="h-min w-44 font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`text-sm bg-[#1F394E] text-[#EEEEEE] w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        <div className="flex w-full justify-between items-center">
          <span>{selected.game}</span>
          <span>{selected.amount}</span>
        </div>
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`rounded bg-[#1F394E] text-[#EEEEEE] fixed flex flex-col w-44 mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        {listOptions.map((option, index) => {
          return (
            <li
              key={index}
              className={`rounded block border-slate-600 border-b p-2 text-sm hover:text-white`}
              onClick={option.onClick}
            >
              <div className="flex justify-between items-center">
                <span>{option.label}</span>
                <span>{option.amount}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Selector;
