import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'
import { Login } from './pages'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
      <div>Hey</div>
    </>
  )
}

export default App
