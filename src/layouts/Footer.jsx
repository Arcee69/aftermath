import React from 'react'
import Logo from "../assets/svg/logo_big.svg"
import Facebook from "../assets/svg/facebook.svg"
import Mail from "../assets/svg/mail.svg"
import Linkedin from "../assets/svg/linkedin.svg"


const Footer = () => {
  return (
    <div className='bg-[#F2F2F3] flex flex-col py-[30px]'>
        <div className='px-[100px] flex flex-col justify-start items-start w-full gap-4'>
            <div className='w-full'>
                <img src={Logo} alt='Logo' className='w-[250px] h-[82px]'/>
            </div>
            <div className='w-full flex items-center justify-between'>
                <p className='text-[#646668] font-neue text-base'>Investment firm located in London, UK</p>
                <div className='flex items-center gap-2'>
                    <p className='font-neue text-base text-[#323334]'>Why Choose Us</p>
                    <p className='font-neue text-base text-[#323334]'>Our Services</p>
                    <p className='font-neue text-base text-[#323334]'>Contact Us</p>
                </div>
            </div>
        </div>
        <div className='border border-[#D9DADA] py-[30px] px-[100px] border-b-0 mt-[76px] flex items-center justify-between'>
            <p className='font-neue text-base text-[#323334]'>
                &copy; Aftermath Investment Konsult, 2024
            </p>
            <div className='flex items-center gap-6 text-[24px]'>
                <img src={Facebook} alt='Facebook' className="w-[32px] h-[32px]" />
                <img src={Mail} alt='Mail' className="w-[32px] h-[32px]" />
                <img src={Linkedin} alt='Linkedin' className="w-[32px] h-[32px]" />
            </div>

        </div>

    </div>
  )
}

export default Footer