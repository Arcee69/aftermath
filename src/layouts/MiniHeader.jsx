import React, { useEffect, useState } from 'react'


import Logo from "../assets/svg/logo_small.svg"
import MobileNavBar from './MobileNavBar'
import { IoCartOutline } from 'react-icons/io5'

import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { FaRegUser } from 'react-icons/fa6'

const MiniHeader = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false)


  const navigate = useNavigate()
 

  return (
    <div className='w-full fixed z-10'>
        <div className='w-[100%] h-[58px] bg-[#850117] py-[16px] px-[20px] flex justify-between items-center'>
            <img src={Logo} alt='logo' className='h-[32px]' onClick={() => navigate("/")}/>
            <div className='flex items-center gap-2'>
              <FiSearch className='w-[20px] h-[20px] text-[#fff]'/>
              <IoCartOutline className='w-[20px] h-[20px] text-[#fff]'/>
              <FaRegUser className='w-[20px] h-[20px] text-[#fff]'/>
            </div>
     
        </div>
        {open && <MobileNavBar handleClose={() => setOpen(false)} /> }
    </div>
  )
}

export default MiniHeader