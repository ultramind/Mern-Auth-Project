import React from 'react'
import { useSelector } from 'react-redux'

const HomeScreen = () => {
  const { userInfo } = useSelector(state => state.auth)
  return (
    <div className='flex flex-col min-w-full min-h-screen justify-center items-center'>
      <div className='w-[400px] p-8 border border-white-500 rounded-lg'>
        <h1 className='font-bold text-lg'>Welcome to ULTR AUTH</h1>
        <hr className='my-6' />
        <h2>
          <b>Name: </b>
          {userInfo.firstname}
        </h2>
        <h2>
          <b>Name: </b>
          {userInfo.email}
        </h2>
        <p className='my-4'>
          Full stack technology refers to the entire depth of a computer system
          application, and full stack developers straddle two separate web
          development domains: the front end and the back end. The front end
          includes everything that a client, or site viewer, can see and
          interact with.
        </p>
        <p>
          Full stack technology refers to the entire depth of a computer system
          application, and full stack developers straddle two separate web
          development domains: the front end and the back end. The front end
          includes everything that a client, or site viewer, can see and
          interact with.
        </p>
      </div>
    </div>
  )
}

export default HomeScreen
