import "dotenv/config"
import { NextFunction, Request, Response } from "express"
import { verifyAccessToken } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";

export const protectedRoute = async (req: Request | any, res: Response, next: NextFunction): Promise<Response | void> => {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).send({ message: "Token not found." })
    
    try {
        const decoded = (await verifyAccessToken(token as string)) as JwtPayload
        req.user = {
            id: decoded.payload.id,
            email: decoded.payload.email,
            username: decoded.payload.username,
        }

        next()
    } catch (error: any) {
        return res.status(401).send({ message: "Unauthorized" })
    }
}