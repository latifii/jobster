import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/JobsContainer'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import Job from './Job'
import Loading from './Loading'

const JobsContainer = () => {
  const dispatch = useDispatch()
  const { jobs, isLoading } = useSelector((store) => store.allJob)
  useEffect(() => {
    dispatch(getAllJobs())
  }, [])

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    )
  }

  if (jobs.length < 1) {
    return (
      <Wrapper>
        <h1>No jobs to display...</h1>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h5>{jobs.length} jobs found</h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
    </Wrapper>
  )
}

export default JobsContainer
