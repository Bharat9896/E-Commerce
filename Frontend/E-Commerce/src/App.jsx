import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Pages/home/home'   // ✅ correct import

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />   {/* ✅ yaha use kiya */}

    </>
  )
}

export default App