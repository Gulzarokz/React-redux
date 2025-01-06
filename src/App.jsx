import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import HomeContainer from './containers/HomeContainer'
import Home from './Components/Home'

function App() {
  
  return (
    <>
    <div>App components</div>
     {/* <User data={{name: "Gulxar", age: 23}} /> */}
     <HomeContainer />
     <Home />

    </>
  )
}

export default App
