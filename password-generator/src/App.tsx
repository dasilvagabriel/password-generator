import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='center-square'>
        <p className='pass-title'>Generate a <br /> <span className='pass-green'>random password</span></p>
        <p className="subtitle">Never use an insecure password again.</p>
        <button className='btn'>Generate passwords</button> 
        <hr />
      </div>
    </>
  )
}

export default App
