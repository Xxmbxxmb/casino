import React from "react";

export interface CardType {
  data: {
    pinta: string;
    valor: string | number;
  };
  index: number;
}

export const Card = ({ data, index }: CardType) => {
  const { valor, pinta } = data;

  return (
    <div className={`flex absolute left-[${index * 100}px] flex-col bg-slate-200 h-48 w-36 border rounded-lg mx-1 my-1 border border-black`}>
      <div className="flex justify-start">
        <h1 className={`text-xl ml-2 mt-2 ${["♦", "♥"].includes(pinta) && "text-red-500"}`}>{valor || ""}</h1>
      </div>
      <div className="flex justify-center items-center h-36">
        <h1
          className={`text-6xl ${["♦", "♥"].includes(pinta) && "text-red-500"}`}
        >
          {pinta || ""}
        </h1>
      </div>
      <div className="flex justify-end">
      <h1 className={`text-xl ml-2 mt-2 ${["♦", "♥"].includes(pinta) && "text-red-500"}`}>{valor || ""}</h1>
      </div>
    </div>
  );
};
