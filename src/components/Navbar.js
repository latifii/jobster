import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, toggleSidebar } from '../features/user/userSlice'
import { useState } from 'react'

const Navbar = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.user)
  const [showDrop, setShowDrop] = useState(false)
  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          type='button'
          className='toggle-btn'
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowDrop(!showDrop)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showDrop ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => {
                dispatch(logoutUser())
                setShowDrop(!showDrop)
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
