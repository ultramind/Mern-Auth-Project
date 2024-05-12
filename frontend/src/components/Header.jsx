import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-800 px-8 w-full h-[70px] text-gray-300 flex justify-between items-center'>
    <h1 className='text-2xl font-bold'>UltraAuth</h1>
      <div className='flex gap-8'>
        <span className='border-r-2 border-gray-500 px-8'>Akachukwu</span>
        <Link to={`/register`}>Sign Up</Link>
      </div>
    </div>
  )
}

export default Header
