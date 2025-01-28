import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import Logo from "../assets/svg/logo_small.svg"
import Menu from "../assets/svg/menu.svg"

import MobileNavBar from './MobileNavBar'




const MiniHeader = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false)


  const navigate = useNavigate()
 

  return (
    <div className='w-full fixed z-10'>
        <div className='w-[100%] h-[58px] bg-[#090540] py-[16px] px-[20px] flex justify-between items-center'>
            <img src={Logo} alt='logo' className='w-[185px] h-[32px]' onClick={() => navigate("/")}/>
            <div className='flex items-center gap-2 ' onClick={() => setOpen(true)}>
              <img src={Menu} alt='menu' className='h-[32px]' />
            </div>
     
        </div>
        {open && <MobileNavBar handleClose={() => setOpen(false)} /> }
    </div>
  )
}

export default MiniHeader