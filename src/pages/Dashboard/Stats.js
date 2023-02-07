import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChartsContainer, Loading, StatsContainer } from '../../components'
import { showStats } from '../../features/allJobs/allJobsSlice'

const Stats = () => {
  const dipatch = useDispatch()
  const { monthlyApplications, isLoading } = useSelector(
    (store) => store.allJob
  )
  useEffect(() => {
    dipatch(showStats())
  }, [])

  if (isLoading) {
    return <Loading center />
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}

export default Stats
