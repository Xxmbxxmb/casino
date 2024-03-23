import { Blackjack } from "../games/blackjack/class"
import { Actions } from "../types/games"
import { hit, stand, start } from "../utils/games"
import { getGame, } from "../utils/database"
import { Request, Response } from "express"

export const activeGames = async (req: Request | any, res: Response) => {
    const uid = req.user.id
    const dbGame = await getGame(uid, "BLACKJACK")
    if (!dbGame) return res.send({ message: "No active games." })
    const game = new Blackjack()
    game.recoverGame({ bet: dbGame?.bet?.amount as number, dealedCards: dbGame?.dealedCards as number})

    return res.send({ 
        player: { cards: game.jugador.mano, total: game.jugador.total },
        dealer: { cards: game.crupier.mano, total: game.crupier.total },
        options: { ...game.options }
    })
}

export const executeAction = async (req: Request | any, res: Response) => {
    const uid = req.user.id
    const { action } = req.body
    let actionResponse;
    if (action === Actions.HIT) {
        actionResponse = await hit(uid)
        return res.send(actionResponse)
    } else if (action === Actions.STAND) {
        actionResponse = await stand(uid)
        return res.send(actionResponse)
    } else if (action === Actions.START) {
        const { bet, currency }: { bet: number; currency: "osrs" | "rs3" } = req.body
        actionResponse = await start(uid, bet, currency)
        return res.send(actionResponse)
    } else return res.send(actionResponse)

}