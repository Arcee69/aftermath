import React from 'react'
import Logo from "../assets/svg/logo_small.svg" 

const Header = () => {
  return (
    <div className='bg-[#090540] fixed z-50 w-full px-[100px] py-5 flex items-center justify-between'>
        <img src={Logo} alt="Logo" className='w-[187px] h-[44px]' />
        <div className='flex items-center gap-[32px]'>
            <p className='font-neue text-base text-[#fff] cursor-pointer'>Why Choose Us</p>
            <p className='font-neue text-base text-[#fff] cursor-pointer'>Our Services</p>
            <p className='font-neue text-base text-[#fff] cursor-pointer'>Contact Us</p>
            <button
                className='bg-[#F2F2F3] w-[113px] rounded-lg h-[45px] flex items-center justify-center'
                type='button'
            >
                <p className='font-bold font-neue text-[#090540]'>Contact us</p>
            </button>
        </div>        
    </div>
  )
}

export default Header