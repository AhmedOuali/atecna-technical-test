import React, { useContext, useEffect, useState } from 'react'
import { RealTimeContext } from './contexts/RealTimeContext'
import IGame from './interfaces/IGame'
import LineChart from './components/LineChart'
import Indicator from './components/Indicator'
import AppLayout from './components/AppLayout'
import { getOneGame } from './services/game'
import { SOURCE_GAMES } from './constants'
import GameCard from './components/GamesCard'

function App () {
  const [games, setGames] = useState<IGame[]>([]);
  const {indicatorData, lineChartData} =  useContext(RealTimeContext);

  useEffect(() => {
    Promise.all(SOURCE_GAMES.map(gameId => getOneGame(gameId)))
      .then(games => setGames(games))
      .catch(e => {})
  }, [])

  return (
    <AppLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {games.map((game, index) => <div className="md:p-4" key={`game_${index}`}><GameCard data={game}/></div>)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:p-4">
          <LineChart data={lineChartData} />
        </div>
        <div className="md:p-4">
          <Indicator data={indicatorData} />
        </div>
      </div>
    </AppLayout>)
}

export default App
