import { WS_URL } from "../constants";
import { httpGet, Options } from "../infrastructure/httpClient";
import IGame from "../interfaces/IGame";

export const getOneGame = (gameId: number, options?: Options):Promise<IGame> => {
  return httpGet<IGame>(`${WS_URL}/games/${gameId}`, options)
};
