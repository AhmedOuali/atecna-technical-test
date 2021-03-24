import IStreamer from '../interfaces/IStreamer'
import { getStreamsByGameId } from '../helpers/twitchApi'
import Sockets, { eventTypes } from '../socket'
import constants from '../constants'

const reduceStreamersData = (streamers: IStreamer[]) => {
  const totalViewerCount = streamers && streamers.reduce((acc, curr) => {
    return acc + curr.viewer_count
  }, 0)
  const gameId = Array.isArray(streamers) && streamers[0] && streamers[0]["game_id"];
  return { 'game_id': gameId, 'viewer_count': totalViewerCount || 0, timestamp: (new Date()).getTime() }
}

const fetchFromTwitch = async () => {
  try {
    const allGamesData = await Promise.all(constants.SOURCE_GAMES.map(gameId => (getStreamsByGameId(gameId))))
    const payload = Array.isArray(allGamesData) && allGamesData.map(streamResp => (reduceStreamersData(streamResp)))
    Sockets.io.emit(eventTypes.CHANNELS_VIEWERS_COUNT,  payload )
  } catch (e) {

  }
}

export default fetchFromTwitch
