import React, { useEffect, useState } from "react";
import Button from "./Button";
import { BlackJackOptions } from "../../redux/slices/games";
import { formatMillions } from "../../utils/formatter";
import { setWallet } from "../../redux/slices/user";
import { useAppDispatch } from "../../redux/hooks";
import { startBlackjack } from "../../redux/slices/gamesThunk";

interface Props {
  options: BlackJackOptions;
  pedir: () => void;
  quedarse: () => void;
}
const Sidebar = ({ options, pedir, quedarse }: Props) => {
  const [bet, setBet] = useState("0");
  const dispatch = useAppDispatch();

  const startGame = async () => {
    const { payload } = await dispatch(startBlackjack(bet));
    if (payload.code) return;
    else dispatch(setWallet(payload.options.wallet));
  };

  useEffect(() => {
    if (options.bet) setBet(options.bet.toString());
  }, [options.bet]);

  return (
    <div className="bg-[#213743] flex flex-col w-1/3 h-full px-3 py-3">
      <div className="flex justify-between text-[#B1BAD3]">
        <h5>Monto de Apuesta</h5>
        <h5>0.0003152</h5>
      </div>
      <div className="flex mt-1 py-0.5 pl-0.5 rounded bg-[#2F4553]">
        <input
          onChange={(e) => setBet(e.target.value)}
          disabled={options.isPlaying}
          value={bet}
          type="text"
          className="w-full rounded bg-[#0F212E] text-white font-semibold px-2.5"
        />
        <div className="h-[36px] w-[46px] flex justify-center items-center">
          <button
            onClick={() => setBet(`${Number(bet) / 2}`)}
            disabled={options.isPlaying}
            className="text-white font-medium"
          >
            ½
          </button>
        </div>
        <div className="h-[36px] w-[46px] flex justify-center items-center">
          <button
            onClick={() => setBet(`${Number(bet) * 2}`)}
            disabled={options.isPlaying}
            className="text-white font-medium"
          >
            2×
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-3 pb-2">
        <Button disabled={!options.isPlaying} onClick={pedir} label="Pedir" />
        <Button
          disabled={!options.isPlaying}
          onClick={quedarse}
          label="Quedarse"
        />
      </div>
      <div className="flex justify-between">
        <Button
          disabled={!options.isPlaying}
          onClick={() => null}
          label="Separar"
        />
        <Button
          disabled={!options.isPlaying}
          onClick={() => null}
          label="Doblar"
        />
      </div>
      <div className="flex py-3">
        <button
          disabled={options.isPlaying}
          onClick={startGame}
          type="button"
          className={`w-full text-white bg-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 ${
            !options.isPlaying &&
            "hover:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-green-800"
          }`}
        >
          Apuesta
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
