import React, { useState } from 'react'

import Shapes from "../assets/png/shapes.png"

import Logo from "../assets/svg/logo_big.svg"
import Facebook from "../assets/svg/facebook.svg"
import Mail from "../assets/svg/mail.svg"
import Linkedin from "../assets/svg/linkedin.svg"


const Footer = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

  return (
    <>
        <div 
            data-aos="fade-up" 
            data-aos-duration="3000"
            className='bg-[#090540] h-[987px] mt-[110px] lg:mt-[242px] flex px-5 lg:pl-[100px] md:justify-center  lg:justify-between py-[100px] '
        >
            <div className='flex flex-col md:items-center lg:items-start w-[379px] gap-6'>
                <p className='text-[32px] lg:text-[48px] text-[#fff] font-bold'>Contact Us</p>
                <p className='font-neue text-base text-center lg:text-left text-[#E1E7DC]'>
                    Through our market knowledge we can deliver bespoke terms based on your requirements.
                </p>
                <div className='flex flex-col w-full items-start gap-[22px] '>
                
                    <div className='flex flex-col w-full'>
                        <p className='font-neue text-[#fff] font-medium '>Full Name</p>
                        <input 
                            type='text'
                            name='fullName'
                            value={fullName}
                            placeholder='John Doe'
                            className='rounded-lg bg-[#221E53] outline-none w-full h-[44px] p-2'
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                
                    <div className='flex flex-col w-full'>
                        <p className='font-neue text-[#fff] font-medium '>Email</p>
                        <input 
                            type='text'
                            name='email'
                            value={email}
                            placeholder='example@mail.com'
                            className='rounded-lg  bg-[#221E53] outline-none w-full h-[44px] p-2'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <p className='font-neue text-[#fff] font-medium '>Service</p>
                       
                        <select name='service' className='apperance-none rounded-lg bg-[#221E53] flex items-center text-[#fff]  w-full h-[44px] p-2 outline-none'>
                            <option value="US">US</option>
                            <option value="US">NG</option>
                        </select>
                        
                    </div>
                    <div className='flex flex-col w-full'>
                        <p className='font-neue text-[#fff] font-medium '>Message</p>
                        <textarea 
                            type='text'
                            name='message'
                            placeholder='Type Message Here...'
                            className='rounded-lg outline-none bg-[#221E53] w-full h-[128px] p-2'
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <a 
                        className='w-[101px] h-[44px] bg-[#fff] md:mx-auto lg:mx-0 flex flex-col items-center justify-center rounded-lg'
                    >
                        <p className='text-[#090540] font-semibold text-base'>Submit</p>
                    </a>

                </div>
            </div>
            <div className='w-[595px] hidden lg:block'>
                <img src={Shapes} alt='Shapes' className='w-[595px]' />
            </div>
        </div>
        <div 
            data-aos="fade-up" 
            data-aos-duration="3000"
            className='bg-[#F2F2F3] flex flex-col py-[30px]'
        >
            <div className='px-5 lg:px-[100px] flex flex-col justify-start items-start w-full gap-4'>
                <div className='w-full'>
                    <img src={Logo} alt='Logo' className='w-[250px] h-[82px]'/>
                </div>
                <div className='w-full flex flex-col md:flex-row md:items-center gap-5 md:gap-0 justify-between'>
                    <p className='text-[#646668] font-neue text-base'>Investment firm located in London, UK</p>
                    <div className='flex items-center gap-10 lg:gap-2 '>
                        <p className='font-neue text-sm lg:text-base text-[#323334]'>Why Choose Us</p>
                        <p className='font-neue text-sm lg:text-base text-[#323334]'>Our Services</p>
                        <p className='font-neue text-sm lg:text-base text-[#323334]'>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className='border border-[#D9DADA] py-[30px] px-5 lg:px-[100px] border-b-0 mt-[30px] lg:mt-[76px] flex flex-col gap-5 md:gap-0 md:flex-row md:items-center justify-between'>
                <p className='font-neue text-base text-[#323334]'>
                    &copy; Aftermath Investment Konsult, 2024
                </p>
                <div className='flex items-center gap-6 text-[24px]'>
                    <img src={Facebook} alt='Facebook' className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px]" />
                    <img src={Mail} alt='Mail' className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px]" />
                    <img src={Linkedin} alt='Linkedin' className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px]" />
                </div>

            </div>

        </div>
       
    </>
  )
}

export default Footer