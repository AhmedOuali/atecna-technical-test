import express from 'express'
import { getOne } from '../controllers/gameController'

const router = express.Router()

router.get('/:id', getOne)
export default router
