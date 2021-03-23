import IRequest from '../../interfaces/IRequest'
import IResponse from '../../interfaces/IResponse'
import INext from '../../interfaces/INext'
import { getGameById } from '../../helpers/twitchApi';
import BadRequestError from '../../errors/BadRequestError';
import NotFoundError from '../../errors/NotFoundError'
import { isNumeric } from '../../helpers/validators';

export default async function getOne (req: IRequest, res: IResponse, next: INext) {
  try {
    const gameId = req.params.id;
    if (!gameId || !isNumeric(gameId)) throw new BadRequestError("ER_0004");

    const game = await getGameById(gameId);
    if (!game) throw new NotFoundError("ER_0005");

    return res.status(200).json(game)
  } catch (e) {
    next(e)
  }
}
