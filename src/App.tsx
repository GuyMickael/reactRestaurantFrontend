import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Router from './router/Router'
import imagePath from './assets/background.jpg'

function App() {
  const [count, setCount] = useState(0)

  // si on veut une image
  // className="h-screen w-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${imagePath})` }}
  return (
    <div className='bg-gray-300' >
      <Router />
    </div>
  )
}

export default App
