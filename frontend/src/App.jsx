import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/profileScreen'
import HomeScreen from './screens/HomeScreen'

function App () {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/' element={<HomeScreen/>} />
      </Routes>
    </main>
  )
}

export default App
