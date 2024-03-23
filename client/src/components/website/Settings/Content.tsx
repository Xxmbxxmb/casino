import React from "react";
import { Deposit } from "./Deposit";
import { Withdraw } from "./Withdraw";
import { Dashboard } from "./Dashboard/Dashboard";

export const Content = ({ id }: { id: number }) => {
  if (id === 0) return <Dashboard />;
  else if (id === 1) return <Deposit />;
  else return <Withdraw />;
};
