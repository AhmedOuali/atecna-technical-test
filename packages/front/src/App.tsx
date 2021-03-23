import React, { useContext } from 'react'
import { RealTimeContext } from './contexts/RealTimeContext'
import LineChart from './components/LineChart'
import Indicator from './components/Indicator'
import AppLayout from './components/AppLayout'

function App () {
  const {indicatorData, lineChartData} =  useContext(RealTimeContext);

  return (
    <AppLayout>
      <div className="flex">
        <div className="w-full md:w-1/2 xl:w-1/2 md:p-6">
          <LineChart data={lineChartData} />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 md:p-6">
          <Indicator data={indicatorData} />
        </div>
      </div>
    </AppLayout>)
}

export default App
