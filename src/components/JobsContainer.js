/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/JobsContainer'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import { Job, PageBtnContainer, Loading } from '.'

const JobsContainer = () => {
  const dispatch = useDispatch()
  const {
    jobs,
    isLoading,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
    page,
  } = useSelector((store) => store.allJob)
  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchStatus, searchType, sort])

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
      <h5>
        {totalJobs} job{totalJobs > 1 ? 's' : ''} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}

export default JobsContainer
