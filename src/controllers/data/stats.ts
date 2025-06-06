import { type RequestHandler } from 'express'
import Games from '../../models/Games'

const getAllGames: RequestHandler = async (req, res, next) => {
  try {

    const games = await Games.find()

    res.status(200).json({
      message: 'Games retrieved successfully',
      data: games,
    })
  } catch (error) {
    next(error)
  }
}

export default getAllGames;
