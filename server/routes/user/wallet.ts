import "dotenv/config"
import { Router } from "express"
import { protectedRoute } from "../../middlewares/auth"
import { getWallet } from "../../controllers/wallet"

const router = Router()

router.get("/wallet", protectedRoute, getWallet)

export default router;