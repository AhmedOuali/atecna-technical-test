import AppError from './AppError'

class NotFoundError extends AppError {
  constructor (errorCode: string, message?: string) {
    super(errorCode, message)
  }
}

export default NotFoundError
