import React, { FunctionComponent } from 'react'
import { IStream } from '../../interfaces/IStream'
import './indicator.css'

interface IndicatorProps {
  data: IStream | null
}
const Indicator: FunctionComponent<IndicatorProps> = (props) => {
  const {data} = props

  return (
    <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded-full p-5 to-indigo-100"><i className="fas fa-users fa-2x fa-inverse"></i></div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-600 p-2">Chess</h5>
          <h3 className="font-bold text-7xl p-8">{data && data['viewer_count']} <span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span>
          </h3>
          <h5 className="uppercase text-gray-600 text-sm p-2"> Real-Time Active viewer</h5>
        </div>
      </div>
    </div>
  )
}

export default Indicator
