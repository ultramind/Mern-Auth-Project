import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    const [user, setUser] = useState({
        email:'',
        password:'',
      })
    
      const [isLoading, setIsLoading] = useState(false)
      const [buttonDisabled, setButtonDisabled] = useState(false)
    
      const handleSignIn = ()=>{
        console.log(user)
      }
  return (
    <div>
      <div className='flex flex-col min-w-full min-h-screen justify-center items-center'>
        <div className='w-[400px] p-8 border border-white-500 rounded-lg'>
          {isLoading && <h4>Processing...</h4>}
          <h2 className='text-3xl my-4 font-semibold'>Sign In</h2>
          <hr />
          
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
          
          <button
            onClick={handleSignIn}
            className='py-2 w-full px-10 text-gray-200 mt-4 bg-slate-600 rounded'
          >
            {buttonDisabled ? 'No Sign up ' : 'Sign Up...'}
          </button>
          <Link className='mt-4 block' to='/register'>
            You don't have an account sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen