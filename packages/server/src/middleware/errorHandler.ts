import IRequest from '../interfaces/IRequest'
import IResponse from '../interfaces/IResponse'
import BadRequestError from '../errors/BadRequestError'
import NotFoundError from '../errors/NotFoundError'
import InternalServerError from '../errors/InternalServerError'
import UnauthorizedError from '../errors/UnauthorizedError'
import AppError from '../errors/AppError'
import INext from '../interfaces/INext'

export default function (err, req: IRequest, res: IResponse, next: INext) {
  console.error(err)

  if (err instanceof AppError) {
    err.setMessage(req.translate(err.errorCode))
  }

  if (err instanceof BadRequestError) {
    return res.status(400).json({ error: err })
  }

  if (err instanceof UnauthorizedError) {
    return res.status(401).json({ error: err })
  }

  if (err instanceof NotFoundError) {
    return res.status(404).json({ error: err })
  }

  if (err instanceof InternalServerError) {
    return res.status(500).json({ error: err })
  }

  if (err instanceof Error) {
    const error = new InternalServerError('ER_0001', req.translate('ER_0001'), err.stack)
    return res.status(500).json({ error: error })
  }

  return res.status(404).json({ error: new NotFoundError("ER_0002", req.translate("ER_0002")) })
}
