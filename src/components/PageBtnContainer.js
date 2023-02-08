import React from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/PageBtnContainer'
import { changePage } from '../features/allJobs/allJobsSlice'

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJob)
  const dispatch = useDispatch()
  const prevPage = () => {
    let newPage = page - 1
    if (newPage < 1) {
      newPage = numOfPages
    }
    dispatch(changePage(newPage))
  }
  const nextPage = () => {
    let newPage = page + 1

    if (newPage > numOfPages) {
      newPage = 1
    }
    dispatch(changePage(newPage))
  }
  const arrayPage = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })
  return (
    <Wrapper>
      <button className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='btn-container'>
        {arrayPage.map((item) => {
          return (
            <button
              type='button'
              className={item === page ? 'pageBtn active' : 'pageBtn'}
              key={item}
              onClick={() => dispatch(changePage(item))}
            >
              {item}
            </button>
          )
        })}
      </div>
      <button className='next-btn' onClick={nextPage}>
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  )
}

export default PageBtnContainer
