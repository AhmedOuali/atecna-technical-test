import React, { FunctionComponent, useEffect, useState } from 'react'
import IStream from '../interfaces/IStream'
import { io } from 'socket.io-client'
import { LINE_CHART_POINT_DENSITY, WS_URL } from '../constants'

type RealTimeContextProps = {
  indicatorData: IStream | null,
  lineChartData: Array<IStream[]> | null
}

export const RealTimeContext = React.createContext<RealTimeContextProps>({
  indicatorData: null,
  lineChartData: null
});

const socket = io(WS_URL)

export const RealTimeContextProvider: FunctionComponent = ({ children }) => {
  const [realTimeData, setRealTimeData] = useState<Array<IStream[]>>([])

  useEffect(() => {
    socket.on('CHANNELS_VIEWERS_COUNT', (data: IStream[]) => {
      setRealTimeData(previousState => [...(previousState.length === LINE_CHART_POINT_DENSITY ?
        previousState.slice(1, LINE_CHART_POINT_DENSITY) :
        previousState), data])
    })
    return () => {
      // Unsubscribe to socket when componentWillUnmount
      socket.off('CHANNELS_VIEWERS_COUNT')
    }
  }, [])

  const indicatorData = (realTimeData[realTimeData.length - 1] && realTimeData[realTimeData.length - 1][0]) || null
  const lineChartData = realTimeData.map(streams => streams.slice(1, streams.length))

  return (
    <RealTimeContext.Provider value={{ indicatorData, lineChartData }}>
      {children}
    </RealTimeContext.Provider>);
};

