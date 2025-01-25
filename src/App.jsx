import { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"

import './App.css'
import Routers from './routers'
import { ToastContainer} from 'react-toastify'

function App() {


  useEffect(() => {
    AOS.init({
      once: true, // Ensures animations occur only once
  });
  }, []);


  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  )
}

export default App
