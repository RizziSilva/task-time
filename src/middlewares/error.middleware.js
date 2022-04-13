import { StatusCodes } from 'http-status-codes'

const DEFAULT_ERROR_MESSAGE =
  'Houve um erro inesperado. Tente novamente mais tarde.'

const DEFAULT_STATUS_CODE = StatusCodes.INTERNAL_SERVER_ERROR

export function ErrorMiddleware() {
  function errorHandler(err, req, res, next) {
    if (err) {
      const customError = {
        message: err.message ? err.message : DEFAULT_ERROR_MESSAGE,
        statusCode: err.statusCode ? err.statusCode : DEFAULT_STATUS_CODE,
        pathname: `${req.method} at ${req.originalUrl}`,
      }

      res.status(customError.statusCode).json(customError)
    } else {
      next()
    }
  }

  return {
    errorHandler,
  }
}
