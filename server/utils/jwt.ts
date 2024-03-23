import jwt from "jsonwebtoken"
import "dotenv/config"

export const generateAccessToken = (payload: string | object | Buffer) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ payload }, process.env.JWT_SECRET as string, { expiresIn: '1h'}, (err, token) => {
            if (err) return reject(err)
            return resolve(token)
        })
    })
}

export const verifyAccessToken = async (token: string): Promise<Error | string | jwt.JwtPayload | boolean | undefined> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET as string, (err, payload) => {
        if(err) return reject(err)
        resolve(payload)
    })
})
}