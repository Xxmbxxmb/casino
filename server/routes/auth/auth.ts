import { Router } from "express"
import { register, login, refresh } from "../../controllers/auth"
import { protectedRoute } from "../../middlewares/auth"

const router = Router()

router.post("/signup", register)
router.post("/signin", login)
router.post("/refresh", protectedRoute, refresh)

export default router;