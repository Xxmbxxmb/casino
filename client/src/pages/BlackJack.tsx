import React, { useState } from "react";
import { Player } from "../components/blackjack/Player";
import Sidebar from "../components/blackjack/Sidebar";
import { useAppSelector } from "../redux/hooks";
import { BlackJackOptions } from "../redux/slices/games";
import { useActions } from "../hooks/blackjack/useActions";

const BlackJack = () => {
  const { pedir, quedarse } = useActions();
  const { bj } = useAppSelector((state) => state.games.games);
  const { options } = bj;

  return (
    <div className="flex w-full rounded-2xl bg-[#0F212E]">
      <Sidebar options={options as BlackJackOptions} pedir={pedir} quedarse={quedarse} />
      <div className="flex flex-col w-full justify-between my-12">
        <Player mano={bj.dealer?.cards} total={bj.dealer?.total as number} />
        <Player mano={bj.player?.cards} total={bj.player?.total as number} />
      </div>
    </div>
  );
};

export default BlackJack;
