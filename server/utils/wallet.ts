import db from "../db"
import { WalletDoc } from "../games/blackjack/utils/types"

export const modifyWallet = async (id: string, newWallet: WalletDoc) => {
    const wallet = await db.wallet.update({ where: { id_player: id }, data: { osrs: newWallet.osrs, rs3: newWallet.rs3}})
    return wallet
}