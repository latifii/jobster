import moment from 'moment/moment'
import React from 'react'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Job'
import { deleteJob, setEditJob } from '../features/job/jobSlice'
import JobInfo from './JobInfo'

const Job = ({
  company,
  jobLocation,
  jobType,
  position,
  status,
  createdAt,
  _id,
}) => {
  const data = moment(createdAt).format('MMM Do, YYYY')
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>d</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo text={jobLocation} icon={<FaLocationArrow />} />
          <JobInfo text={data} icon={<FaCalendarAlt />} />
          <JobInfo text={jobType} icon={<FaBriefcase />} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className='actions'>
            <Link
              className='btn edit-btn'
              to='/add-job'
              onClick={() =>
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                )
              }
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => dispatch(deleteJob(_id))}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Job
