import { Router } from "express"
import { protectedRoute } from "../../middlewares/auth"
import { activeGames, executeAction } from "../../controllers/blackjack"

const router = Router()

router.get("/actives", protectedRoute, activeGames)
router.post("/action", protectedRoute, executeAction)

export default router;