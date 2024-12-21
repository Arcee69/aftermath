import { useState } from 'react'

import './App.css'
import Routers from './routers'
import { ToastContainer} from 'react-toastify'

function App() {


  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  )
}

export default App
