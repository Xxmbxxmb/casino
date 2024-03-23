import db from "../db"
import { Blackjack } from "../games/blackjack/class"
import { dbCards, dbSuits } from "../types/games"
import { addCardToHand, addNewBet, addNewGame, addNewHand, getGame, updateGame } from "./database"
import { modifyWallet } from "./wallet"

export const start = async (userId: string, bet: number, currency: "osrs" | "rs3") => {
    try{
        const uid = userId
        const currentGame = await db.game.findFirst({ where: { id_user: uid, name: "BLACKJACK", state: "PROGRESS" }})
        if (currentGame) throw new Error("You have active games, finish them before starting new one.")
        if (!bet || !currency) throw new Error("Missing currency or bet.")
        const user = await db.user.findUnique({where: {id: uid}, include: { wallet: true }})
        if (!user) throw new Error("User not found.")
        if (!user.wallet) throw new Error("No wallet found.")
        if (bet > user.wallet[currency]) throw new Error("You don't have necessary funds.")

        const newOsrs = currency === "osrs" ? user.wallet?.osrs - bet : user.wallet?.osrs
        const newRs3 = currency === "rs3" ? user.wallet?.rs3 - bet : user.wallet?.rs3

        const game = new Blackjack()
        game.startGame({ bet, wallet: { osrs: newOsrs, rs3: newRs3 }})

        const cards: any[] = []
        for (const card of game.jugador.mano) {
            const name = card.valor.toString().toUpperCase()
            const newCard = await db.card.findFirst({ where: { name: dbCards[name], suit: dbSuits[card.pinta]}})
            cards.push(newCard)
        }

        const newHand = await addNewHand(uid)
        const newBet = await addNewBet(uid, bet)

        const updatedWallet = modifyWallet(uid, { osrs: newOsrs, rs3: newRs3 })
        const addCard = addCardToHand(cards[0].id, newHand.id)
        const addCard2 = addCardToHand(cards[1].id, newHand.id)
        const newGame = addNewGame(uid, "bj", newBet.id, newHand.id)
        Promise.all([updatedWallet, newGame, addCard, addCard2])

        return { 
            player: { cards: game.jugador.mano, total: game.jugador.total },
            dealer: { cards: game.crupier.mano, total: game.crupier.total },
            options: { ...game.options }    
        }
    } catch (error: any) {
        return { error }
    }
}

export const hit = async (userId: string) => {
    const uid = userId
    const dbGame = await getGame(uid, "BLACKJACK")
    const dealedCards = (dbGame?.dealedCards as number + 1)
    const game = new Blackjack()
    game.recoverGame({bet: dbGame?.bet?.amount as number, dealedCards: dbGame?.dealedCards as number})
    const carta = game.hit()
    const name = carta.card.valor.toString().toUpperCase()

    if (game.jugador.total > 21) {
        const standResponse = await stand(uid)
        return {
            ...standResponse,
            pinta: carta.card.pinta,
            valor: carta.card.valor,
            total: carta.total
        }
    }

    const dbCard = await db.card.findFirst({ where: { name: dbCards[name], suit: dbSuits[carta.card.pinta] }})        
        
    Promise.all([
        db.cardOnHand.create({ data: { id_hand: dbGame?.id_hand as string, id_card: dbCard?.id as number }}),
        db.game.update({ where: { id: dbGame?.id }, data: { dealedCards: dealedCards, state: "PROGRESS" }})
    ])

    return { pinta: carta.card.pinta, valor: carta.card.valor, total: game.jugador.total }
}

export const stand = async (userId: string) => {
    const uid = userId;
    const dbGame = await getGame(uid, "BLACKJACK")
    if (dbGame?.state === "FINISHED") return { message: "This game already ended."}
    const dealedCards = dbGame?.dealedCards

    const game = new Blackjack()
    game.recoverGame({ bet: dbGame?.bet?.amount as number, dealedCards: dealedCards as number})
    game.stand()

    updateGame(dbGame?.id as string, { state: "FINISHED"})

    return {
        player: { cards: game.jugador.mano, total: game.jugador.total },
        dealer: { cards: game.crupier.mano, total: game.crupier.total },
        options: { ...game.options }
    }
}