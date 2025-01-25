import React from 'react'
import Logo from "../assets/svg/logo_small.svg" 
import { useNavigate } from 'react-router-dom'

const Header = () => {
  
  const navigate = useNavigate()



  return (
    <div className='bg-[#090540] fixed z-50 w-full px-[100px] py-5 flex items-center justify-between'>
        <img src={Logo} alt="Logo" className='w-[180px] h-[48px] cursor-pointer' onClick={() => {navigate("/"); window.scrollTo(0, 0)}}/>
        <div className='flex items-center gap-[32px]'>
            <p className='font-neue text-base text-[#fff] cursor-pointer' onClick={() => {navigate("/about"); window.scrollTo(0, 0)}}>About Us</p>
            <p className='font-neue text-base text-[#fff] cursor-pointer' onClick={() => {navigate("/services"); window.scrollTo(0, 0)}}>Our Services</p>
            <p className='font-neue text-base text-[#fff] cursor-pointer' onClick={() => {navigate("/gallery"); window.scrollTo(0, 0)}}>Property Gallery</p>
            <button
                className='bg-[#F2F2F3] w-[113px] rounded-lg h-[45px] flex items-center justify-center'
                type='button'
                onClick={() => navigate("/", {state: {
                  section: "contact"
              }})}
            >
                <p className='font-bold font-neue text-[#090540]'>Contact us</p>
            </button>
        </div>        
    </div>
  )
}

export default Header