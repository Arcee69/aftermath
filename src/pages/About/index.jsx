import React from 'react'

import GirlB from "../../assets/png/girl-b.png"
import GirlC from "../../assets/png/girl-c.png"
import Girl from "../../assets/png/girl.png"
import Shapes from "../../assets/png/shapes.png"

import Door from "../../assets/svg/door.svg"

const About = () => {
  return (
    <div className='w-full px-5 lg:px-[100px] mt-[106px] lg:mt-[150px]'>
      <div 
        data-aos="fade-up" 
        data-aos-duration="3000"
        className='flex items-center w-full justify-between'
      >
        <div className='flex flex-col gap-6 lg:w-[577px]'>
          <p className='text-[32px] lg:text-[54px] leading-[38px] font-bold lg:leading-[72px] font-neue text-[#1E1E1E]'>
            Making UK Property Ownership a Reality
          </p>
          <img src={GirlB} alt='GirlB' className='w-full lg:hidden block ' />
          <p className='text-base font-bold font-neue text-[#646668]'>
            Our Mission - To unlock the full potential of real estate and business investments through strategic 
            partnerships, delivering sustainable value for our clients and stakeholders.
          </p>
          <button
            className='bg-[#090540] w-[146px] h-[45px] p-3 rounded'
          >
            <p className='text-[#fff] font-neue font-bold'>Contact us now</p>
          </button>
        </div>
        <img src={GirlB} alt='GirlB' className='w-[532px] hidden lg:block ' />
      </div>
      <div 
        data-aos="fade-up" 
        data-aos-duration="3000"
        className='mt-[120px] lg:mt-[180px] flex flex-col lg:flex-row w-full'>
        <img src={GirlB} alt='GirlB' className='w-full lg:hidden block bg-[#B4C2A9]' />
        <img src={GirlC} alt='GirlC' className='hidden lg:block w-[650px] h-[570px] rounded-tl-lg rounded-bl-lg bg-[#B4C2A9]' />
        <div className='w-full bg-[#B4C2A9] lg:rounded-tr-lg rounded-br-lg px-5 h-[370px] lg:h-[570px] lg:pl-[88px] flex items-center '>
            <div className='flex flex-col gap-5 lg:w-[445px] w-full'>
              <p className='font-neue text-[#323334] font-bold text-[32px] lg:text-[48px]'>
                WHO WE ARE
              </p>
              <p className='text-base font-neue text-[#191A1A]'>
                Aftermath Investment Konsults Ltd (AIK) is a property-focused, 
                UK-based investment company dedicated to providing sustainable 
                opportunities that foster wealth creation and long-term growth. 
                Our core focus is on strategic real estate and business investments, 
                tailored to help clients achieve their financial aspirations.
              </p>
            </div>
        </div>
      </div>
      <div 
        data-aos="fade-up" 
        data-aos-duration="3000"
        className='mt-[69px] lg:mt-[158px] w-full flex flex-col lg:flex-row items-center justify-between'>
        <div className='w-full lg:w-[531px] flex flex-col gap-6 lg:gap-[36px]'>
            <div className='flex flex-col gap-5'>
                <p className='font-neue text-[#323334] font-bold text-[24px] lg:text-[40px]'>Why Choose Us?</p>
                <p className='text-[14px] lg:text-base text-[#646668] font-neue'>
                    Our strength as a specialist mortgage broker is 
                    providing access to residential and buy to let property finance.
                </p>
            </div>
            <img src={GirlB} alt='GirlB' className='h-[319px] w-full md:hidden' />
            <div className='flex flex-col gap-[33px]'>
                <div className='flex flex-col items-start lg:flex-row lg:items-center h-[256px] lg:h-[180px] w-full rounded-lg gap-3 p-4 bg-[#F3ECE7]'>
                    <div className='bg-[#FFFFFF] w-[72px] h-[72px] lg:w-[250px] lg:h-[95px] rounded-full flex items-center justify-center lg:justify-start'>
                        <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#323334] font-bold font-neue text-[20px]'>Expert Guidance</p>
                        <p className='text-[#646668] text-base'>
                          Getting your dream property can be complex, 
                          our experienced team offers step-by-step guidance to ensure the process is as smooth as possible.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-start lg:flex-row lg:items-center h-[256px] lg:h-[180px] w-full rounded-lg gap-3 p-4 bg-[#F5F7F8]'>
                    <div className='bg-[#FFFFFF] w-[72px] h-[72px] lg:w-[250px] lg:h-[95px] rounded-full flex items-center lg:justify-start justify-center'>
                        <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#323334] font-bold font-neue text-[20px]'>Tailored Solutions</p>
                        <p className='text-[#646668] text-base'>
                            We understand unique challenges and opportunities and we offer mortgage products 
                            that are flexible and customized to your financial circumstances.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-start lg:flex-row lg:items-center h-[256px] lg:h-[180px] w-full rounded-lg gap-3 p-4 bg-[#F8F9F7]'>
                    <div className='bg-[#FFFFFF] w-[72px] h-[72px] lg:w-[250px] lg:h-[95px] rounded-full flex items-center justify-center lg:justify-start'>
                        <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#323334] font-bold font-neue text-[20px]'>Access to Exclusive Deals</p>
                        <p className='text-[#646668] text-base'>
                            Our strong relationships with top UK lenders mean we can provide you 
                            with exclusive mortgage rates and terms that are not always available to the public.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-6/12 relative hidden lg:block'>
            <img src={Girl} alt='Girl' className='w-[473px] h-[648px]' />
            <img src={Shapes} alt='Shapes' className='w-[595px] h-[884px] absolute -top-20 -z-10' />
        </div>
      </div>
    </div>
  )
}

export default About