import React from "react";

export const Window = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="flex flex-col w-full justify-center rounded-b-md rounded-t-md mb-5 border-2 border-[#0d2436]">
        <div className="flex w-full justify-center items-center bg-[#567BDA] rounded-t-md">
          <h1 className="text-md text-white font-semibold py-2">{title}</h1>
        </div>
        <div className="flex flex-col p-5 text-[#EEEEEE]">{children}</div>
      </div>
    </>
  );
};
