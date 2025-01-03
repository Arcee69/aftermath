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
                        At AIK Ltd, we specialize in providing bespoke real estate consultancy services tailored 
                        to Nigerians investing in UK properties and UK-based individuals exploring strategic 
                        property investments in Nigeria.
                    </p>
                </div>
                <img src={GirlB} alt='GirlB' className='h-[319px] w-10/12 md:hidden' />
                <div className='flex flex-col gap-[33px]'>
                    <div className='flex flex-col items-start lg:flex-row lg:items-center h-[256px] lg:h-[180px] w-full rounded-lg gap-3 p-4 bg-[#F3ECE7]'>
                        <div className='bg-[#FFFFFF] w-[72px] h-[72px] lg:w-[250px] lg:h-[75px] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[66px] lg:h-[35px]' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#323334] font-bold font-neue text-[20px]'>Expert Guidance</p>
                            <p className='text-[#646668] text-base'>
                                Navigating the UK property market can be complex, most especially for foreign investors and so, 
                                our experienced team offers step-by-step guidance to ensure the process is as smooth as possible.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start lg:flex-row lg:items-center h-[256px] lg:h-[180px] w-full rounded-lg gap-3 p-4 bg-[#F5F7F8]'>
                        <div className='bg-[#FFFFFF] w-[72px] h-[72px] lg:w-[210px] lg:h-[85px] rounded-full flex items-center lg:justify-start justify-center'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[66px] lg:h-[45px]' />
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
                        <div className='bg-[#FFFFFF] w-[72px] h-[72px] lg:w-[210px] lg:h-[85px] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[66px] lg:h-[45px]' />
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
                            Administrative Assistance
                        </p>
                        <p className='font-neue text-[#646668] text-base'>
                            We connect you with trusted admins and ensure all necessary paperwork is handled efficiently, 
                            giving you peace of mind.
                        </p>
                    </div>
                    <div className='h-[324px] p-5 bg-[#F5F7F8] rounded-lg flex flex-col gap-[28px]'>
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
                    <div className='h-[324px] p-5 bg-[#F3ECE7] rounded-lg hidden lg:flex flex-col gap-[32px]'>
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