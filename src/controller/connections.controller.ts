import { Request, Response } from 'express'
import db from '../database/connection'

class ConnectionsController {
  async store(req: Request, res: Response) {
    const { user_id } = req.body
    const data = await db('connections').insert({ user_id })
    return res.status(201).json({ message: 'success' })
  }

  async index(req: Request, res: Response) {
    const [{ total }] = await db('connections').count('* as total')
    return res.json(total)
  }
}

export default new ConnectionsController()