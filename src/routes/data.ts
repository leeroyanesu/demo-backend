import express from 'express'
import checkBearerToken from '../middlewares/check-bearer-token'
import errorHandler from '../middlewares/error-handler'
import getAllGames from '../controllers/data/stats'

// initialize router
const router = express.Router()

// POST at path: http://localhost:8080/auth/login
router.get('/stats', [checkBearerToken], getAllGames, errorHandler)


export default router
