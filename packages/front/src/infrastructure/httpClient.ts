import axios from 'axios'

import { WS_URL } from '../constants'

const instance = axios.create({
  baseURL: WS_URL,
})

export interface Options {
  headers?: any,
}

export const httpGet = <T> (url: string, options: Options = {}): Promise<T> => {
  const { headers } = options
  return new Promise<T>((resolve, reject) => {
    instance.get(url, { withCredentials: true, headers, proxy: false })
      .then(response => {
        const { data } = response
        resolve(data)
      }).catch((err) => {
      const { response } = err
      console.log(err)
      const error = response && response.data && response.data.error
      reject(error)
    })
  })
}
