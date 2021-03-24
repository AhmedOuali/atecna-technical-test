import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import UnauthorizedError from '../errors/UnauthorizedError'

export default [
  cors({ credentials: true, origin: process.env["APP_FRONT_URL"] }),
  helmet(),
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    onLimitReached: () => {
      throw new UnauthorizedError('ER_0006')
    }
  }),
]
