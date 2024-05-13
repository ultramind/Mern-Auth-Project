import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useUpdateUserMutation } from '../redux/slices/userSlice'
import { setCredentials } from '../redux/slices/authSlice'
import { toast } from 'react-toastify'

const ProfileScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userInfo } = useSelector(state => state.auth)

  const [user, setUser] = useState({
    firstname: userInfo.firstname,
    lastname: userInfo.lastname,
    email: userInfo.email,
    password: '',
    confirmPassword: ''
  })

  const [updateUser, { isLoading }] = useUpdateUserMutation()

  const handleUpdateProfile = async () => {
    try {
      const res = await updateUser({
        _id: userInfo._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email
      }).unwrap()
      dispatch(setCredentials({ ...res }))
      toast.success('Profile updated!', { position: 'top-center' })
    } catch (err) {
      toast.error(err?.data?.message || err.error, { position: 'top-center' })
    }
  }

  return (
    <div>
      <div className='flex flex-col min-w-full min-h-screen justify-center items-center'>
        <div className='w-[400px] p-8 border border-white-500 rounded-lg'>
          {isLoading && <h4>Processing...</h4>}
          <h2 className='text-3xl my-4 font-semibold'>Update Profile</h2>
          <hr />
          <div className='mt-4'>
            <label className='block'>
              <span className='block text-sm font-medium text-slate-700'>
                First Name
              </span>
              <input
                type='text'
                name='firstname'
                placeholder='Firstname'
                value={user.firstname}
                onChange={e => setUser({ ...user, firstname: e.target.value })}
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-800
            '
              />
            </label>
          </div>
          <div className='mt-4'>
            <label className='block'>
              <span className='block text-sm font-medium text-slate-700'>
                lastname
              </span>
              <input
                type='text'
                name='lastname'
                placeholder='Last Name'
                value={user.lastname}
                onChange={e => setUser({ ...user, lastname: e.target.value })}
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-800
            '
              />
            </label>
          </div>
          <div className='mt-4'>
            <label className='block'>
              <span className='block text-sm font-medium text-slate-700'>
                Email
              </span>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })}
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-800
            '
              />
            </label>
          </div>
          <div className='mt-4'>
            <label className='block'>
              <span className='block text-sm font-medium text-slate-700'>
                Password
              </span>
              <input
                type='password'
                name='password'
                placeholder='Your Password'
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-800
            '
              />
            </label>
          </div>
          <div className='mt-4'>
            <label className='block'>
              <span className='block text-sm font-medium text-slate-700'>
                Confirm Password
              </span>
              <input
                type='password'
                name='confirmPassword'
                placeholder=' Confirm your Password'
                value={user.confirmPassword}
                onChange={e =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-800
            '
              />
            </label>
          </div>
          <button
            onClick={handleUpdateProfile}
            className='py-2 w-full px-10 text-gray-200 mt-4 bg-gray-900 rounded'
          >
            {isLoading ? 'Updating...' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
