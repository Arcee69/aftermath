import React from 'react'

import Carpet from "../../assets/png/logo_bg.png"

import Logo from "../../assets/svg/logo_big.svg"
import Door from "../../assets/svg/door.svg"

const Services = () => {
  return (
    <div className='w-full' data-aos="fade-up" data-aos-duration="3000">
        <div 
            style={{
                background: `url(${Carpet})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className='w-full h-[176px] lg:h-[459px] flex flex-col items-center pt-[40px] lg:pt-[80px] justify-center'
        >
            <img src={Logo} alt='Logo' className='w-[291px] h-[77px] lg:w-[792px] lg:h-[211px]' />
        </div>

        <div
            data-aos="fade-up" 
            data-aos-duration="3000" 
            className='flex flex-col w-full mt-[64px] lg:mt-[140px] px-5 '
        >
            <div className='w-full lg:w-10/12 mx-auto lg:px-[100px] gap-[56px] flex flex-col items-center'>
                <div className='flex flex-col items-center gap-5'>
                    <div className='flex flex-col items-center w-[242px]'>
                        <p className='font-neue text-[24px] text-[#323334] lg:text-[40px] font-bold'>Our Services</p>
                    </div>
                    <p className='font-neue lg:w-[460px] text-center text-xs lg:text-base text-[#646668]'>
                        Let us help you turn your property aspirations into reality with confidence and ease.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className=' h-[324px] p-5 bg-[#F3ECE7] rounded-lg flex flex-col gap-[28px]'>
                        <div className='w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] bg-[#FFFFFF] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <p className='text-[#323334] lg:w-[275px] font-neue text-lg leading-[24px] font-bold'>
                            Property Search and Guidance
                        </p>
                        <p className='font-neue text-[#646668] text-sm lg:text-base'>
                            We help you find the perfect property that aligns with your needs, preferences, and budget. 
                            From family homes to investment opportunities, our team will uncover options that suit you best.
                        </p>
                    </div>
                    <div className=' h-[324px] p-5 bg-[#F5F7F8] rounded-lg flex flex-col gap-[28px]'>
                        <div className='w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] bg-[#FFFFFF] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <p className='text-[#323334] font-neue lg:w-[359px] leading-[24px] text-lg font-bold'>
                            Financial Planning and Support
                        </p>
                        <p className='font-neue text-[#646668] text-base'>
                            Navigating property financing can be complex. 
                            We work closely with financial specialists to help you explore tailored solutions that fit your situation.
                        </p>
                    </div>
                    <div className='h-[324px] p-5 bg-[#F3ECE7] lg:hidden rounded-lg flex flex-col gap-[32px]'>
                        <div className='w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] bg-[#FFFFFF] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <p className='text-[#323334] font-neue text-lg lg:w-[259px] leading-[24px] font-bold'>
                            Pre-Approval Within 24 Hours
                        </p>
                        <p className='font-neue text-[#646668] text-base'>
                            We understand the importance of moving quickly in the property market. 
                            That’s why we offer pre-approval within 24 hours, helping you take the first step toward 
                            securing your property.
                        </p>
                    </div>
                    <div className='h-[324px] p-5 bg-[#F5F7F8] rounded-lg flex flex-col gap-[28px]'>
                        <div className='w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] bg-[#FFFFFF] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <p className='text-[#323334] font-neue text-lg lg:w-[259px] leading-[24px] font-bold'>
                            Administrative Assistance
                        </p>
                        <p className='font-neue text-[#646668] text-base'>
                            We connect you with trusted admins and ensure all necessary paperwork is handled efficiently, 
                            giving you peace of mind.
                        </p>
                    </div>
                    <div className='h-[324px] p-5 bg-[#F3ECE7] rounded-lg hidden lg:flex flex-col gap-[32px]'>
                        <div className='w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] bg-[#FFFFFF] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <p className='text-[#323334] font-neue text-lg lg:w-[259px] leading-[24px] font-bold'>
                            Pre-Approval Within 24 Hours
                        </p>
                        <p className='font-neue text-[#646668] text-base'>
                            We understand the importance of moving quickly in the property market. 
                            That’s why we offer pre-approval within 24 hours, helping you take the first step toward 
                            securing your property.
                        </p>
                    </div>

                </div>

            </div>
        </div>

    </div>
  )
}

export default Services