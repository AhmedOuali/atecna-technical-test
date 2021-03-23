import AppError from './AppError'

class UnauthorizedError extends AppError {
  constructor (errorCode: string, message?: string) {
    super(errorCode, message)
  }
}

export default UnauthorizedError
