import express from 'express'

export default interface IRequest<T = any> extends express.Request<T> {
  translate?: (value: string) => string,
}
