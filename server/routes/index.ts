import { Router } from "express"
import userRouter from "./user/user"
import authRouter from "./auth/auth"
import bjRouter from "./games/blackjack"

const router = Router();

router.use("/user", userRouter)
router.use("/auth", authRouter)
router.use("/blackjack", bjRouter)

export default router