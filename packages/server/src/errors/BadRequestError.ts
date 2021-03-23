import AppError from './AppError'

class BadRequestError extends AppError {
  constructor (errorCode: string, message?: string) {
    super(errorCode, message)
  }
}

export default BadRequestError
