import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const { userInfo } = useSelector(state => state.auth)

  return (
    <div className='bg-gray-900 px-8 w-full h-[70px] text-gray-300 flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>UltraAuth</h1>

      {userInfo ? (
        <div className='flex gap-8'>
          <Link className='border-r-2 border-gray-500 px-8' to={`/profile`}>
            {userInfo.firstname}
          </Link>
          <span className='text-red-500 cursor-pointer'>Logout</span>
        </div>
      ) : (
        <div className='flex gap-8'>
          <Link to={`/login`}>Sign In</Link>;
          <Link to={`/register`}>Sign Up</Link>
        </div>
      )}
    </div>
  )
}

export default Header
