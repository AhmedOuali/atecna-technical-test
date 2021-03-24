import React, { FunctionComponent } from 'react';
import IGame from '../../interfaces/IGame';
import './gameCard.css';

interface GameCardProps {
  data: IGame;
}

const GameCard: FunctionComponent<GameCardProps> = ({data}) => {
  return (

      <div
        className=" grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="col-span-3 row-span-4 p-1 m-1">
          <a href={`https://www.twitch.tv/directory/game/${data.name}`}>
            <img src={data.box_art_url.replace('{width}', '400').replace('{height}', '300')} alt="Placeholder"
                 className="rounded-t-xl object-cover h-48 w-full" />
          </a>
        </div>

        <div className="col-span-3 row-span-1">
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href={`https://www.twitch.tv/directory/game/${data.name}`}>
                {data.name}
              </a>
            </h1>
            <p className="text-grey-darker text-sm">{`ìd: ${data.id}`}</p>
          </header>
        </div>
      </div>
  )
}
export default GameCard;
