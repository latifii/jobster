import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const Logo = () => {
  return (
    <>
      <Link to='/'>
        <img src={logo} alt='jobster logo' className='logo' />
      </Link>
    </>
  )
}

export default Logo
