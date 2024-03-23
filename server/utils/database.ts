import db from "../db"

export const addNewBet = async (userUid: string, amount: number) => {
    const newBet = await db.bet.create({ data: { id_player: userUid, amount }})
    return newBet
}

export const addNewGame = async (userUid: string, game: string, idBet: number, idHand: string) => {
    if (game === "bj") {
        const newGame = await db.game.create({ 
            data: {
                name: "BLACKJACK", 
                state: "PROGRESS", 
                id_bet: idBet, 
                id_user: userUid, 
                id_hand: idHand, 
                dealedCards: 3 
            }
        })
        return newGame;
    } else return;
}

export const addNewHand = async (userUid: string) => {
    const newHand = await db.hand.create({ data: { id_player: userUid }})
    return newHand
}

export const addCardToHand = async (cardUid: number, handUid: string) => {
    const newHand = await db.cardOnHand.create({ data: { id_card: cardUid, id_hand: handUid }})
    return newHand
}

export const getGame = async(userId: string, name: "BLACKJACK" | "CRASH") => {
    const game = await db.game.findFirst({ where: { id_user: userId, name, state: "PROGRESS" }, include: { bet: true }})
    return game
}

export const updateGame = async(gameId: string, data: any) => {
    await db.game.update({ where: { id: gameId }, data: { ...data }})
}