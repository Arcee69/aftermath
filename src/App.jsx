import { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"

import './App.css'
import Routers from './routers'
import { ToastContainer} from 'react-toastify'

function App() {


  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  )
}

export default App
