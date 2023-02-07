import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/ChartsContainer'
import AreaChartComponent from './AreaChartComponent'
import BarChartComponent from './BarChartComponent'

const ChartsContainer = () => {
  const [toggleChart, setToggleChart] = useState(true)
  const { monthlyApplications: data } = useSelector((store) => store.allJob)
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setToggleChart(!toggleChart)}>
        {toggleChart ? 'Area Chart' : 'bar Chart'}
      </button>
      {toggleChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  )
}

export default ChartsContainer
