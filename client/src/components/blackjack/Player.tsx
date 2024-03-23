import React from "react";
import { Card } from "./Card";
import Total from "./Total";

interface Props {
  mano: { pinta: string; valor: number }[];
  total: number;
}

export const Player = ({ mano, total }: Props) => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center bg-blue-500">
          <Total total={total} />
          <div className="flex relative w-full flex-wrap items-center bg-red-500">
            {mano &&
              mano.map((carta, index) => {
                return (
                  <div className="absolute">
                    <Card index={index} data={carta} key={index} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
