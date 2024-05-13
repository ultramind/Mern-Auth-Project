import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/slices/authSlice'
import { useLogoutMutation } from '../redux/slices/userSlice.js'
import { toast } from 'react-toastify'

const Header = () => {
  const { userInfo } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [logoutApi, { isLoading }] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      const res = await logoutApi().unwrap()
      dispatch(logout())
      toast.success(res.message, { position: 'top-center' })
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }

  return (
    <div className='bg-gray-900 px-8 w-full h-[70px] text-gray-300 flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>UltraAuth</h1>

      {userInfo ? (
        <div className='flex gap-8'>
          <Link className='border-r-2 border-gray-500 px-8' to={`/profile`}>
            {userInfo.firstname}
          </Link>
          <span onClick={handleLogout} className='text-red-500 cursor-pointer'>
            Logout
          </span>
        </div>
      ) : (
        <div className='flex gap-8'>
          <Link className='border-r-2 border-gray-500 px-8' to={`/login`}>
            Sign In
          </Link>
          <Link to={`/register`}>Sign Up</Link>
        </div>
      )}
    </div>
  )
}

export default Header
