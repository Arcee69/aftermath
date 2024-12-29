import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Girl from "../../assets/png/girl.png"
import Shapes from "../../assets/png/shapes.png"
import GirlB from "../../assets/png/girl_mobile.png"
import HomeBg from "../../assets/png/home.png"
import HouseA from "../../assets/png/house-a.png"
import HouseB from "../../assets/png/house-b.png"
import HouseC from "../../assets/png/house-c.png"
import GalleryHouseA from "../../assets/png/gallery_home_a.png"
import GalleryHouseB from "../../assets/png/gallery_home_b.png"
import GalleryHouseC from "../../assets/png/gallery_home_c.png"

import Door from "../../assets/svg/door.svg"

const Home = () => {
  
    const navigate = useNavigate()

  return (
    <div className='w-full' data-aos="fade-up" data-aos-duration="3000">
        <div 
            style={{
                background: `url(${HomeBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className='w-full h-[560px] lg:h-[672px] flex flex-col items-center justify-center'
        >
            <div className='w-10/12 lg:w-[850px] mx-auto gap-[40px] flex flex-col items-center'>
                <p className='font-neue font-bold text-[32px] lg:text-[72px] text-[#fff] uppercase leading-[38px] lg:leading-[80px] text-center'>
                    Real Estate and Property Consulting
                </p>
                <p className='text-center font-neue text-[#F4F4F4] text-sm lg:text-2xl'>
                    We provide sustainable investment opportunities that help drive wealth creation.
                </p>
                <button className='bg-[#F2F2F3] w-[157px] h-[45px] rounded-lg flex items-center justify-center'>
                    <p className='font-neue text-[#090540] font-bold'>Get started today</p>
                </button>
            </div>
        </div>
        <div 
            data-aos="fade-up" 
            data-aos-duration="3000"
            className='mt-[69px] lg:mt-[158px] px-5 lg:pl-[100px] w-full flex flex-col lg:flex-row items-center justify-between'
        >
            <div className='w-full lg:w-[531px] flex flex-col gap-6 lg:gap-[36px]'>
                <div className='flex flex-col gap-5'>
                    <p className='font-neue text-[#323334] font-bold text-[24px] lg:text-[40px]'>Why Choose Us?</p>
                    <p className='text-[14px] lg:text-base text-[#646668] font-neue'>
                        Our strength as a specialist mortgage broker is 
                        providing access to residential and buy to let property finance.
                    </p>
                </div>
                <img src={GirlB} alt='GirlB' className='h-[319px] w-10/12 md:hidden' />
                <div className='flex flex-col gap-[33px]'>
                    <div className='flex flex-col items-start lg:flex-row lg:items-center h-[256px] lg:h-[180px] w-full rounded-lg gap-3 p-4 bg-[#F3ECE7]'>
                        <div className='bg-[#FFFFFF] w-[72px] h-[72px] lg:w-[250px] lg:h-[95px] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#323334] font-bold font-neue text-[20px]'>Expert Guidance</p>
                            <p className='text-[#646668] text-base'>
                                Navigating the UK mortgage market can be complex, 
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

        <div 
            className='flex flex-col w-full mt-[100px] px-5 lg:px-[100px]'  
            data-aos="fade-up" 
            data-aos-duration="3000"
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

        <div 
            data-aos="fade-up" 
            data-aos-duration="3000"
            className='mt-[100px] lg:mt-[242px] w-full px-5 lg:px-[100px] flex flex-col md:flex-row items-start justify-between'
        >
            <div className='flex flex-col gap-5 lg:w-[381px] h-[191px]'>
                <p className='font-neue font-bold text-[24px] lg:text-[48px] text-[#323334]'>
                    Gallery
                </p>
                <p className='text-[#646668] text-sm lg:text-base font-neue'>
                    Browse through our gallery of properties we have acquired for our clients over the years.
                </p>
                <button
                    className='bg-[#090540] w-[138px] h-[45px] p-3 rounded flex flex-col items-center justify-center'
                    onClick={() => navigate("/gallery")}
                >
                    <p className='text-[#fff] font-neue text-sm font-bold'>See full gallery</p>
                </button>
            </div>

            <div className='flex md:hidden flex-col gap-[36px]'>
                <img src={GalleryHouseA} alt='GalleryHouseA' className='' />
                <img src={GalleryHouseB} alt='GalleryHouseB' className='' />
                <img src={GalleryHouseC} alt='GalleryHouseC' className='' />
            </div>

            <div className='hidden md:flex flex-col gap-5 md:w-[500px] lg:w-[734px]'>
                <div className='w-full'>
                    <img src={HouseA} alt='HouseA' className='' />
                </div>
                <div className='flex items-center gap-5'>
                    <img src={HouseB} alt='HouseB' className='w-[165px] lg:w-[361px]' />
                    <img src={HouseC} alt='HouseC' className='w-[165px] lg:w-[361px]' />
                </div>
            </div>

        </div>

        <div 
            className='mt-[138px] lg:mt-[242px] w-full px-5 lg:px-[100px]'
            data-aos="fade-up" 
            data-aos-duration="3000"
        >
            <div className='bg-[#B4C2A9] w-full lg:h-[570px] rounded-lg py-[100px]'>
                <div className='lg:w-[749px] mx-auto px-3 lg:px-0 flex flex-col items-center gap-[32px]'>
                    <p className='text-[#090540] font-bold text-[30px] leading-[38px] lg:text-[50px] lg:leading-[64px] text-center'>
                        WE CAN HELP YOU LEVERAGE YOUR EXISTING ASSETS TO GET THE BEST DEALS
                    </p>
                    <p className='text-[#646668] font-neue text-sm lg:text-base text-center'>
                        If you have assets that you would like to be leveraged as part of the transaction 
                        such as your investment portfolio, or other property or pensions our team can look 
                        at leveraging these assets to negotiate more flexible lending criteria and more 
                        favourable interest rates, to help you get the best deal.
                    </p>
                    <button
                        type='button'
                        className='bg-[#090540] h-[40px] rounded-lg flex items-center justify-center w-[146px]'
                    >
                        <p className='text-[#fff] font-neue'>Contact us now</p>
                    </button>
                </div>
            </div>
        </div>

        

    </div>
  )
}

export default Home