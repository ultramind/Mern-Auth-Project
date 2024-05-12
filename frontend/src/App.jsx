import {Routes, Route} from  'react-router-dom'
import Header from './components/Header'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'

function App() {

  return (
    <main>
      <Header/>
      <Routes>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/' element={<h1>Home</h1>} />
      </Routes>
    </main>
  )
}

export default App
