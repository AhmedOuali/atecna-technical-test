import AppError from './AppError'

class InternalServerError extends AppError {
  details: string

  constructor (errorCode: string, message?: string, stack?: string) {
    super(errorCode, message)
    if (process.env['APP_DEBUG']) {
      this.details = stack
    }
  }
}

export default InternalServerError
