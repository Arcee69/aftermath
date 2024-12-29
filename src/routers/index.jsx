import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import PageLayout from '../layouts';
import About from '../pages/About';
import Services from '../pages/Services';
import Gallery from '../pages/Gallery';



export default function Routers() {

  return (
    <div>
      <Routes>
 
        <Route element={<PageLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/services' element={<Services />} />
        </Route>        

      </Routes>
    </div>
  )
}
