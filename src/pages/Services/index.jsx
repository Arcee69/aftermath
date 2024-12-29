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
                        <p className='font-inter font-semibold text-center text-xs lg:text-sm text-[#52507A]'>
                            Interest only and interest roll up options (no monthly payments)
                        </p>
                    </div>
                    <p className='font-neue lg:w-[460px] text-center text-xs lg:text-base text-[#646668]'>
                        Our services cater to diverse needs, from families with loved ones in the UK to those earning 
                        in foreign currencies. We provide bespoke terms and fast, efficient service to make your property 
                        journey as seamless as possible.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className=' h-[324px] p-5 bg-[#F3ECE7] rounded-lg flex flex-col gap-[28px]'>
                        <div className='w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] bg-[#FFFFFF] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <p className='text-[#323334] lg:w-[275px] font-neue text-lg leading-[24px] font-bold'>
                            Mortgage Finance for Nigerian Residents
                        </p>
                        <p className='font-neue text-[#646668] text-sm lg:text-base'>
                            Our strength as a specialist mortgage broker is providing access to residential and 
                            buy to let property finance from £150,000 to £25m.
                        </p>
                    </div>
                    <div className=' h-[324px] p-5 bg-[#F5F7F8] rounded-lg flex flex-col gap-[28px]'>
                        <div className='w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] bg-[#FFFFFF] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <p className='text-[#323334] font-neue lg:w-[359px] leading-[24px] text-lg font-bold'>
                            Property Finance for Those Paid in Foreign Currency
                        </p>
                        <p className='font-neue text-[#646668] text-base'>
                            Get pre-approval terms within 24 hours, giving you a clear 
                            picture of what you can afford and moving you closer to securing your UK property.
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
                            Property Finance for Nigerian Families in the UK
                        </p>
                        <p className='font-neue text-[#646668] text-base'>
                            For Nigerian citizens with families, whether you're purchasing a family home or refinancing, 
                            we can provide mortgages that support your long-term plans.
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