import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addCards, setOptions, setTotal } from "../../redux/slices/games";
import { Actions, Players } from "../../utils/types";
import api from "../../services/api";
import { fixValue, getValor } from "../../utils/games";

export const useActions = () => {
  const dispatch = useAppDispatch();
  const { dealer, player } = useAppSelector(state => state.games.games.bj)


  const pedir = async () => {
    const response = await api.post("/blackjack/action", { action: "hit" })
    const data = response.data
    dispatch(addCards({ card: [{ pinta: data.pinta, valor: data.valor }], player: Players.PLAYER}))
    dispatch(setTotal({ total: data.total, player: Players.PLAYER }))
    if (data.total >  21) await bust(data.options)
  };
  
  const quedarse = async () => {
    const response = await api.post("/blackjack/action", { action: "stand" })
    const data = response.data
    dispatch(setOptions({ options: data.options }))
    
    if (data.message) return
    if (data.options.lastCards){
      let total = dealer.total
      let aces = 0;
      for (const card of data.options.lastCards) {
        const valor = fixValue(card, total, aces)
        dispatch(addCards({ card: [{ pinta: card.pinta, valor }], player: Players.DEALER}))
        dispatch(setTotal({ total: valor, player: Players.DEALER}))
        await new Promise(r => setTimeout(r, 1000))
      }
    }
    console.log(data)
  }

  const bust = async (options: any) => {
    dispatch(setOptions({ options }))
    await new Promise(r => setTimeout(r, 1000))
    let total = dealer.total
    let aces = 0
    for (const card of options.lastCards) {
      const valor = fixValue(card, total, aces)
      dispatch(addCards({ card: [{ pinta: card.pinta, valor }], player: Players.DEALER}))
      dispatch(setTotal({ total: valor, player: Players.DEALER}))
      await new Promise(r => setTimeout(r, 1000))
    }
  }

  const executeAction = async (action: Actions) => {
    if (action === Actions.HIT) await pedir()
    else if (action === Actions.STAND) await quedarse()
    else return
  }

  useEffect(() => {
    if(player.total > 21) console.log(player.total)

  }, [player.total])
  
  return {
    pedir,
    quedarse
  };
};
