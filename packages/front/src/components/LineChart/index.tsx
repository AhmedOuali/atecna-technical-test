import React, { FunctionComponent } from 'react'
import { Line } from 'react-chartjs-2'
import { LINE_CHART_POINT_DENSITY } from '../../constants'
import { IStream } from '../../interfaces/IStream'
import './lineChart.css'

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [{
      gridLines: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
      },
    }],
  },
}

interface LineChartProps {
  data: Array<IStream[]> | null
}

const LineChart: FunctionComponent<LineChartProps> = (props) => {
  const { data } = props

  const midPathIndex = Math.trunc(LINE_CHART_POINT_DENSITY / 2) + 1
  const midPathLabel = data && data[midPathIndex] ?
    `-${Math.trunc(((new Date()).getTime() - data[midPathIndex][0]['timestamp']) / 1000)} sec` : '...'

  const queuePathLabel = data && data[LINE_CHART_POINT_DENSITY - 1] ?
    `-${Math.trunc(((new Date()).getTime() - data[0][0]['timestamp']) / 1000)} sec` : '...'
  const labels = Array.from<string, string>({ length: LINE_CHART_POINT_DENSITY }, (_, i) => i === (LINE_CHART_POINT_DENSITY - 1) ? 'now' : '')

  labels[midPathIndex] = midPathLabel
  labels[0] = queuePathLabel

  const dataSet = {
    labels,
    datasets: [
      {
        label: '# Hearthstone',
        data: [...Array.from({ length: LINE_CHART_POINT_DENSITY - (data || []).length }, (_, i) => 0), ...(data || []).map(streams => streams[0]['viewer_count'])],
        fill: false,
        backgroundColor: 'rgb(29,86,196)',
        borderColor: 'rgb(99,169,255)',
        pointRadius: 1,
        borderWidth: 1,
        radius: 1,
      },
      {
        label: '# Rocket League',
        data: [...Array.from({ length: LINE_CHART_POINT_DENSITY - (data || []).length }, (_, i) => 0), ...(data || []).map(streams => streams[1]['viewer_count'])],
        fill: false,
        backgroundColor: 'rgb(63,255,10)',
        borderColor: 'rgb(103,214,83)',
        pointRadius: 1,
        borderWidth: 1,
        radius: 1,
      },
      {
        label: '# Dota 2',
        data: [...Array.from({ length: LINE_CHART_POINT_DENSITY - (data || []).length }, (_, i) => 0), ...(data || []).map(streams => streams[2]['viewer_count'])],
        fill: false,
        backgroundColor: 'rgb(255, 56, 10)',
        borderColor: 'rgba(255, 99, 11, 0.8)',
        pointRadius: 1,
        borderWidth: 1,
        radius: 1,
      },
    ],
  }

  return (
    <>
      <div className="bg-white border-transparent rounded-lg shadow-xl">
        <div
          className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
          <h5 className="font-bold uppercase text-gray-600">Comparative graph</h5>
        </div>
        <div
          className="rounded shadow-xl overflow-hidden w-full md:flex"
          style={{ maxWidth: '900px' }}>
          <Line data={dataSet} options={options} />
        </div>
      </div>

    </>
  )
}

export default LineChart
