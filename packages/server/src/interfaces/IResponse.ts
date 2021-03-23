import express from 'express'

export default interface IResponse<T = any> extends express.Response<T> {}
