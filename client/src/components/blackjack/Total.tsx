import React from "react";

interface Props {
  total: number;
}

const Total = ({ total }: Props) => {
  return (
    <div className="bg-[#2F4553] text-white w-min px-12 py-4 rounded-3xl mb-2">
      <h1>{total}</h1>
    </div>
  );
};

export default Total;
