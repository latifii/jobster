import { FormRow } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearJob,
  createJob,
  editJob,
  handleChange,
} from '../../features/job/jobSlice'
import FormRowSelect from '../../components/FormRowSelect'
import { useEffect } from 'react'

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)

  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }

  const submitHandle = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error('fill complete item')
      return
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      )
      return
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  }

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }))
    }
  }, [])

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='jobLocation'
            textLabel='job location'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name='status'
            list={statusOptions}
            value={status}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name='jobType'
            list={jobTypeOptions}
            labelText='job type'
            handleChange={handleJobInput}
            value={jobType}
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearJob())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={submitHandle}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'submit'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
