import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {
  
  return (
    <>
    <div>App components</div>
     <User data={{name: "Gulxar", age: 23}} />
    </>
  )
}

export default App
