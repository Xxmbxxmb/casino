import { Router } from "express"
import { protectedRoute } from "../../middlewares/auth"
import { getUser } from "../../controllers/user"

const router = Router()

router.get("/getprofile", protectedRoute, getUser)

export default router;