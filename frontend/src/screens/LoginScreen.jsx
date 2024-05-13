import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLoginMutation } from '../redux/slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from '../redux/slices/authSlice'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'

const LoginScreen = () => {
  // get userInfo from global state
  const { userInfo } = useSelector(state => state.auth)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  // get function from userSlice
  const [login, { isLoading }] = useLoginMutation()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  // checking if the user is already logged in
  useEffect(() => {
    if (userInfo) {
      // navigate('/')
    }
  }, [])

  const handleSignIn = async e => {
    e.preventDefault()
    try {
      const res = await login(user).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate('/')
      toast.success('Login successfully!', { position: 'top-center' })
    } catch (err) {
      console.log(err?.data?.message || err.error)
      toast.error(err?.data?.message || err.error, { position: 'top-center' })
    }
  }

  return (
    <div>
      <div className='flex flex-col min-w-full min-h-screen justify-center items-center'>
        <form
          onSubmit={handleSignIn}
          className='w-[400px] p-8 border border-white-500 rounded-lg'
        >
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

          {isLoading && <Spinner />}

          <button
            type='submit'
            className='py-2 w-full px-10 text-gray-200 mt-4 bg-gray-900 rounded'
          >
            {isLoading ? 'Submitting...' : 'Sign In'}
          </button>
          <Link className='mt-4 block' to='/register'>
            You don't have an account sign up
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen
