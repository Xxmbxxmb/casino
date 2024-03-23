import { Request, Response } from "express"
import db from "../db"

export const getUser = async (req: Request | any, res: Response) => {
    try {
        const id = req.user.id
        const user = await db.user.findUnique({ where: { id }, include: { wallet: true }})
        if (!user) throw new Error("User not found.")
        return res.json(user)
    } catch (error: any) {
        return res.status(400).send(error)
    }
}