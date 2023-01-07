import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Router from './router/Router'
import imagePath from './assets/background.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${imagePath})` }} >
      <Router />
    </div>
  )
}

export default App
