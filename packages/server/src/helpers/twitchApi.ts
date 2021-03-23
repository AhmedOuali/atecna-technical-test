import axios from 'axios'
import UnauthorizedError from '../errors/UnauthorizedError'
import InternalServerError from '../errors/InternalServerError'
import IStreamer from '../interfaces/IStreamer'
import NotFoundError from '../errors/NotFoundError'

const httpClient = axios.create({
  baseURL: process.env['TWITCH_API-BASE-URL'],
  timeout: 2000,
  headers: {
    'client-id': process.env['TWITCH_CLIENT-ID'],
    'Authorization': `Bearer ${process.env['TWITCH_TOKEN']}`,
  },
  proxy: false
})

// --------------------------------------- getAllDomainZoneRecord -----------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
export const getStreamsByGameId = (gameId: number): Promise<IStreamer[] | null> => {
  return new Promise<IStreamer[]>(((resolve, reject) => {
    httpClient.get(`/helix/streams`, { params: { 'game_id': gameId } })
      .then((response) => {
        if (response.status !== 200) throw new InternalServerError("ER_0001");
        resolve(response.data && response.data.data || null)
      })
      .catch(err => {
        if (err && err.response && err.response.status === 401) return reject(new UnauthorizedError("ER_0003"))
        reject(err)
      })
  }))
}

export const getGameById = (gameId: number): Promise<IStreamer | null> => {
  return new Promise<IStreamer | null>(((resolve, reject) => {
    httpClient.get(`helix/games`, { params: { 'id': gameId } })
      .then((response) => {
        if (response.status !== 200) throw new InternalServerError("ER_0001");
        resolve(response.data && response.data.data[0] || null)
      })
      .catch(err => {
        if (err && err.response && err.response.status === 401) return reject(new UnauthorizedError("ER_0003"))
        reject(err)
      })
  }))
}
