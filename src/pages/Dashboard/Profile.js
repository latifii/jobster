import React from 'react'
import { FormRow } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateUser } from '../../features/user/userSlice'

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const [userProfile, setUserProfile] = useState({
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
    name: user?.name || '',
  })
  const dispatch = useDispatch()
  const changeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserProfile({ ...userProfile, [name]: value })
  }

  const submitHandler = (e) => {
    const { email, lastName, location, name } = userProfile
    e.preventDefault()
    if (!email || !lastName || !location || !name) {
      toast.error('please fill items')
      return
    }
    dispatch(updateUser({ email, lastName, location, name }))
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={submitHandler}>
        <h3>Profile</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={userProfile.name}
            handleChange={changeHandler}
          />
          <FormRow
            type='text'
            textLabel='last name'
            name='lastName'
            value={userProfile.lastName}
            handleChange={changeHandler}
          />
          <FormRow
            type='email'
            name='email'
            value={userProfile.email}
            handleChange={changeHandler}
          />
          <FormRow
            type='text'
            name='location'
            value={userProfile.location}
            handleChange={changeHandler}
          />
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            {!isLoading ? 'save changes' : 'Loading...'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
