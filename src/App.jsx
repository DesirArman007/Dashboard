import { useState } from 'react'
import './App.css'
import Dashboard from './Sections/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dashboard />
    </>
  )
}

export default App
