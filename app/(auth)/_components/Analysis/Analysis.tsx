import React from 'react'
import SankeyChart from './Charts/SankeyChart'
import BarChart from './Charts/BarCharts'

function Analysis() {
  return (
    <div className="w-full">
      <div>
        <h1 className="text-2xl font-semibold border-b p-4">Analysis</h1>
      </div>
      <SankeyChart />
      <div className='w-full h-[50vh]'>
        <BarChart />
      </div>
    </div>
  )
}

export default Analysis
