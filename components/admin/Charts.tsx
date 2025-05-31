import React from 'react'
import EmergenciesByFaciliityBarChart from './EmergenciesByFaciliityBarChart'
import { barChart, pieChart } from '@/contants/graphTestData'
import CompletedEmergenciesPieChart from './CompletedEmergenciesPieChart'

const Charts = () => {
  return (
    <div className='mt-4 w-full flex flex-row gap-2'>
      <EmergenciesByFaciliityBarChart data={barChart} text='Emergecencies By Facility' />
      <CompletedEmergenciesPieChart data={pieChart}/>
    </div>
  )
}

export default Charts