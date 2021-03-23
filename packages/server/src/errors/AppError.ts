class AppError extends Error {
  errorCode: string;

  constructor (errorCode: string, message?: string) {
    super()
    this.message = message
    this.errorCode = errorCode
  }

  setMessage(message) {
    this.message = message;
  }
}

export default AppError
