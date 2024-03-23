import { Request, Response } from "express";
import db from "../db"

export const getWallet = async (req: Request | any, res: Response) => {
    const uid = req.user.id
    try{
        const user = await db.wallet.findUnique({ where: { id_player: uid as string }})
        return res.send(user)

    } catch (error: any) {
        console.log(error)
    }
}