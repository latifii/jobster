import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormRow, FormRowSelect } from '.'
import Wrapper from '../assets/wrappers/SearchContainer'
import { clearFilters, searchItem } from '../features/allJobs/allJobsSlice'

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJob)
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)

  const dispatch = useDispatch()

  const handleSearch = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(searchItem({ name, value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(clearFilters())
  }
  return (
    <Wrapper>
      <form className='form'>
        <h4> search form</h4>
        <div className='form-center'>
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />

          <FormRowSelect
            labelText='status'
            name='searchStatus'
            list={['all', ...statusOptions]}
            value={searchStatus}
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText='type'
            name='searchType'
            list={['all', ...jobTypeOptions]}
            value={searchType}
            handleChange={handleSearch}
          />
          <FormRowSelect
            name='sort'
            list={sortOptions}
            value={sort}
            handleChange={handleSearch}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer
