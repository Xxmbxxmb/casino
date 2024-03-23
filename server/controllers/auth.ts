import db from "../db"
import bcrypt from "bcrypt"
import { Request, Response } from "express"
import { generateAccessToken } from "../utils/jwt"

export const register = async (req: Request, res: Response) => {
    try{
        const { email, username, password, name } = req.body;
        if (!email || !username || !password) throw new Error("Missing parameters.")
        
        const hashedPassword = await bcrypt.hash(password, 10)
        
        const newUser = await db.user.create({ data: { email, password: hashedPassword, name, username}})
        return res.json({data: newUser, error: null})
    } catch (error: any) {
        return res.json({data: null, error: error})
    }
}

export const login = async (req: Request, res: Response) => {
    try{
        const { email, password } = req.body
        const user = await db.user.findUnique({where: { email }})
        if (!user) throw new Error("User not found.")

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) throw new Error("Wrong password.")

        const token = await generateAccessToken({
            id: user.id,
            email: user.email,
            username: user.username
        })
        return res.send({ message: "Login successfull", token: token })
    } catch (error: any) {
        return res.send("Something went wrong...")
    }
}

export const refresh = async (req: Request | any, res: Response) => {
    const token = await generateAccessToken({
        id: req.user.id,
        email: req.user.id,
        username: req.user.username
    })

    return res.send({ message: "Token refresh successfully", token })
}