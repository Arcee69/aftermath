import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Girl from "../../assets/png/girl.png"
import Shapes from "../../assets/png/shapes.png"
import GirlB from "../../assets/png/girl_mobile.png"
import HomeBg from "../../assets/png/home.png"
import BlueBg from "../../assets/png/bg_blue.png"
import SmallBlueBg from "../../assets/png/bg_blue_small.png"
import HouseA from "../../assets/png/home_a.jpg"
import HouseB from "../../assets/png/home_b.jpg"
import HouseC from "../../assets/png/home_c.jpg"
import HouseD from "../../assets/png/house_d.png"
import Street from "../../assets/png/street_view.png"
import Equity from "../../assets/png/equity.png"
import Debt from "../../assets/png/debt.png"
import Profit from "../../assets/png/profit.png"
import GalleryHouseA from "../../assets/png/gallery_home_a.png"
import GalleryHouseB from "../../assets/png/gallery_home_b.png"
import GalleryHouseC from "../../assets/png/gallery_home_c.png"

import Door from "../../assets/svg/door.svg"
import Logo from "../../assets/svg/logo_white.svg"

const Home = () => {
  
    const navigate = useNavigate()

    const chooseRef = useRef()
    const { state } = useLocation();
  
    useEffect(() => {
        if (state?.section === "choose" && chooseRef.current) {
            chooseRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [state]); 

    const isMobile = window.innerWidth < 768

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
            className=' bg-[#4D4F51] lg:pt-[61px] px-5 lg:px-0 h-auto w-full flex flex-col items-center justify-center'
        >
            <div className='w-full lg:w-[803px] mx-auto flex flex-col items-center gap-6'>
                <div className='flex flex-col items-center gap-10'>
                    <div className='gap-5 flex flex-col items-center'>
                        <img src={Logo} alt='Logo' className='w-[241px] h-[64px]' />
                        <p className='font-neue text-[#fff] text-center font-bold uppercase text-[24px] lg:text-[48px]'>
                            Your Connection To The Right Property Investment Opportunities
                        </p>
                    </div>
                    <p className='text-[14px] lg:text-base text-center text-[#fff] font-neue'>
                        We are your dedicated guide in the property market. 
                        We pride ourselves on delivering expert advice and personalized 
                        support to help you achieve your property INVESTMENT goals. 
                        Whether you're taking your first step onto the property ladder or 
                        refining your investment portfolio, we’re here to make the process 
                        seamless and straightforward.
                    </p>
                    <p className='text-[14px] lg:text-base text-center text-[#fff] font-neue'>
                        Additionally, we offer bespoke advisory and investment solutions for 
                        discerning investors seeking opportunities in other thriving global markets.
                    </p>
                    <p className='text-[14px] lg:text-base text-center text-[#fff] font-neue'>
                        AIK’s global partnerships and in-depth market knowledge 
                        position us as the ideal bridge for cross-border investment opportunities, 
                        ensuring every client’s objectives are met with precision
                    </p>
                </div>
                <div className='w-full lg:w-[734px] flex flex-col items-center mt-[32px] justify-center gap-5'>
                    <p className='text-[#fff] font-neue text-lg text-center lg:w-[381px] mx-auto'>
                        Browse through our gallery of properties.
                    </p>
                    <div className='flex md:hidden flex-col gap-[36px]'>
                        <img src={HouseA} alt='GalleryHouseA' className='rounded-2xl' />
                        <img src={HouseB} alt='GalleryHouseB' className='rounded-2xl' />
                        <img src={HouseC} alt='GalleryHouseC' className='rounded-2xl' />
                    </div>
                    <div className='hidden md:flex flex-col items-center gap-5 md:w-[500px] lg:w-[734px]'>
                        <div className='w-full relative'>
                            <img src={HouseA} alt='HouseA' className='rounded-2xl' />
                            <div className="absolute bottom-14 left-5 z-10">
                                <div className="flex flex-col gap-1">
                                    <p className="text-white font-semibold uppercase text-base">THE CITADEL</p>
                                    {/* <p className="text-white text-xl font-bold uppercase">ARCHWAY, N19</p> */}
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='w-full relative'>
                                <img src={HouseB} alt='HouseB' className='rounded-2xl w-[165px] h-[300px] lg:w-[361px]' />
                                <div className="absolute bottom-14 left-5 z-10">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white font-semibold uppercase text-base">THE CITADEL</p>
                                        {/* <p className="text-white text-xl font-bold uppercase">ARCHWAY, N19</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className='w-full relative'>
                                <img src={HouseC} alt='HouseC' className='rounded-2xl w-[165px] h-[300px] lg:w-[361px]' />
                                <div className="absolute bottom-14 left-5 z-10">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white font-semibold uppercase text-base">THE CITADEL</p>
                                        {/* <p className="text-white text-xl font-bold uppercase">ARCHWAY, N19</p> */}
                                    </div>
                                </div>
                            </div>
                            {/* <img src={HouseC} alt='HouseC' className='w-[165px] lg:w-[361px]' /> */}
                        </div>
                    </div>
                </div>

                <button
                    className='w-[138px] h-[45px] rounded-lg bg-[#090540] mb-[60px] p-2'
                    type='button'
                    onClick={() => {navigate("/gallery"); window.scrollTo(0,0)}}
                >
                    <p className='text-[#fff] font-neue font-bold text-[14px]'>See full gallery</p>
                </button>
             
            </div>
           
        </div>

        <div 
            className='flex flex-col w-full mt-[100px] px-5 lg:flex-row lg:justify-between lg:px-[100px]'  
            data-aos="fade-up" 
            data-aos-duration="3000"
        >
            <div className='w-full lg:w-[531px] flex flex-col gap-[36px]'>
                <div className='flex flex-col gap-5'>
                    <p className='text-[24px] lg:text-[48px] font-bold font-neue text-[#323334]'>What We Do</p>
                    <p className='font-neue text-base text-[#646668]'>
                        At AIK Ltd, we specialize in delivering world-class real estate consultancy services tailored to:
                    </p>
                    <div className='lg:hidden flex w-full'>
                        <img src={HouseB} alt='HouseB' className='' />
                    </div>
                    <div className='flex  items-start border-[5px] rounded-xl border-l-[#090540] border-t-0 border-b-0 border-r-0 flex-row items-center h-[88px] lg:h-[104px] w-full rounded-lg gap-5 p-4 bg-[#F3ECE7]'>
                        <div className='bg-[#FFFFFF] w-[60px] h-[40px] lg:w-[66px] lg:h-[56px] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[30px] h-[18px] lg:w-[42px] lg:h-[25px]' />
                        </div>
                        <p className='text-[#323334] font-medium font-neue text-sm lg:text-[20px]'>
                            Seeking premium property investments in the UK.
                        </p>
                    </div>
                    
                    <div className='flex items-start border-[5px] rounded-xl border-l-[#090540] border-t-0 border-b-0 border-r-0 flex-row items-center h-[88px] lg:h-[104px] w-full rounded-lg gap-5 p-4 bg-[#F3ECE7]'>
                        <div className='bg-[#FFFFFF] w-[60px] h-[40px] lg:w-[66px] lg:h-[56px] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[30px] h-[18px] lg:w-[42px] lg:h-[25px]' />
                        </div>
                        <p className='text-[#323334] font-medium font-neue text-sm lg:text-[20px]'>
                            Global investors pursuing lucrative opportunities in key international markets.
                        </p>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex w-5/12'>
                <img src={HouseB} alt='HouseB' className='h-[500px]' />
            </div>
        </div>

        <div 
            className='flex flex-col w-full mt-[100px] px-5 lg:px-[50px]'  
            data-aos="fade-up" 
            data-aos-duration="3000"
        >
            <div 
                className='w-full lg:w-11/12 mx-auto px-5 lg:px-[100px] rounded-3xl h-auto py-[89px] gap-[56px] flex flex-col items-center'
                style={{
                    backgroundImage: `url(${isMobile ?  SmallBlueBg : BlueBg })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover" 
                    // backgroundSize: `${isMobile ? "cover" : "contain" }` 
                }}
            >
                <div className='flex flex-col items-center gap-5'>
                    <div className='flex flex-col items-center w-[242px]'>
                        <p className='font-neue text-[24px] text-[#fff] lg:text-[40px] font-bold'>Our Services</p>
                    </div>
                    <p className='font-neue lg:w-[460px] text-center text-xs lg:text-base text-[#fff]'>
                        Let us help you turn your property aspirations into reality with confidence and ease.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='h-auto lg:h-[168px] p-5 bg-[#6B698E] rounded-lg flex flex-col lg:flex-row lg:items-center gap-[32px]'>
                        <div className='w-[72px] h-[72px] lg:w-[98px] lg:h-[88px] bg-[#FFFFFF] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#fff] text-base font-neue lg:text-lg  font-bold'>
                                Property Sourcing and Inspection
                            </p>
                            <p className='font-neue text-[#fff] text-sm lg:text-base'>
                                Identifying high-value opportunities tailored to your goals.
                            </p>
                        </div>
                    </div>
                    <div className='h-auto lg:h-[168px] p-5 bg-[#6B698E] rounded-lg flex flex-col lg:flex-row lg:items-center gap-[32px]'>
                        <div className='w-[72px] h-[72px] lg:w-[98px] lg:h-[88px] bg-[#FFFFFF] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#fff] font-neue text-base lg:text-lg font-bold'>
                                Due Dilligence
                            </p>
                            <p className='font-neue text-[#fff] text-sm lg:text-base'>
                                Providing peace of mind through meticulous checks
                            </p>
                        </div>
                    </div>
                    <div className='h-auto lg:h-[168px] p-5 bg-[#6B698E] lg:hidden rounded-lg flex flex-col lg:flex-row lg:items-center gap-[32px]'>
                        <div className='w-[72px] h-[72px] lg:w-[98px] lg:h-[88px] bg-[#FFFFFF] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#fff] font-neue text-base lg:text-lg font-bold'>
                                Contract Finalization
                            </p>
                            <p className='font-neue text-[#fff] text-sm lg:text-base'>
                                Ensuring a smooth and successful transaction process.
                            </p>
                        </div>
                    </div>
                    <div className='h-[168px] p-5 bg-[#6B698E] rounded-lg hidden lg:flex flex-col lg:flex-row lg:items-center gap-[32px]'>
                        <div className='w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] bg-[#FFFFFF] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#fff] font-neue text-lg font-bold'>
                                Contract Finalization
                            </p>
                            <p className='font-neue text-[#fff] text-base'>
                                Ensuring a smooth and successful transaction process.
                            </p>
                        </div>
                    </div>
                    
                    

                </div>

                <button
                    className='w-[208px] h-[53px] rounded-lg bg-[#F2F2F3] p-2'
                    type='button'
                >
                    <p className='text-[#090540] font-neue font-bold text-[14px]'>Contact us to get started</p>
                </button>

            </div>
        </div>

        <div 
            ref={chooseRef}
            data-aos="fade-up" 
            data-aos-duration="3000"
            className='mt-[100px] lg:mt-[242px] gap-[114px] w-full px-5 lg:px-[100px] flex flex-col md:flex-row items-start'
        >

            <div className='hidden md:flex flex-col'>
                <img src={Street} alt='Street' className='' />
            </div>

            <div className='w-full lg:w-[531px] flex flex-col gap-6 lg:gap-[30px]'>
                <div className='flex flex-col gap-5'>
                    <p className='font-neue text-[#323334] font-bold text-[24px] lg:text-[40px]'>Why Choose Us?</p>
                    <p className='text-[14px] lg:text-base text-[#646668] font-neue'>
                        At AIK Ltd, we redefine excellence in real estate investments, delivering bespoke solutions rooted in:
                    </p>
                </div>
                <img src={Street} alt='Street' className='h-[319px] w-full md:hidden' />
                <div className='flex flex-col gap-[33px]'>
                    <div className='flex flex-col items-start rounded-xl border-[5px] border-l-[#090540] border-y-0 border-r-0 lg:flex-row lg:items-center h-[256px] lg:h-[180px] w-full rounded-lg gap-3 p-4 bg-[#F3ECE7]'>
                        <div className='bg-[#FFFFFF] w-[72px] h-[72px] lg:w-[250px] lg:h-[95px] rounded-full flex items-center justify-center lg:justify-start'>
                            <img src={Door} alt='Door' className='w-[54px] h-[32px] lg:w-[76px] lg:h-[45px]' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#323334] font-bold font-neue text-[20px]'>Unmatched Expertise</p>
                            <p className='text-[#646668] text-base'>
                                Getting your dream property can be complex, 
                                our experienced team offers step-by-step guidance to ensure the process is as smooth as possible.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start rounded-xl border-[5px] border-l-[#090540] border-y-0 border-r-0 lg:flex-row lg:items-center h-[256px] lg:h-[180px] w-full rounded-lg gap-3 p-4 bg-[#F5F7F8]'>
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
                    <div className='flex flex-col items-start rounded-xl border-[5px] border-l-[#090540] border-y-0 border-r-0 lg:flex-row lg:items-center h-[256px] lg:h-[180px] w-full rounded-lg gap-3 p-4 bg-[#F8F9F7]'>
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
                <button
                    type='button'
                    className='bg-[#090540] h-[40px] rounded-lg flex items-center justify-center w-[113px]'
                >
                    <p className='text-[#fff] font-neue'>Contact us</p>
                </button>
            </div>

        </div>

        <div 
            className='mt-[138px] lg:mt-[190px] w-full flex flex-col items-center justify-center gap-[50px] px-5 lg:px-[100px]'
            data-aos="fade-up" 
            data-aos-duration="3000"
        >
            <div className="flex flex-col items-center gap-3">
                <p className="font-bold font-neue text-[24px] lg:text-[40px] ">Investment Partnership Opportunities</p>
                <p className="w-full lg:w-[460px] text-[#646668] text-sm lg:text-sm text-center font-neue">
                    We invite forward-thinking organizations to partner with us in 
                    pursuing strategic investment opportunities, offering:
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className=" h-[540px] lg:h-auto  py-[32px] px-5 shadow-xl flex flex-col gap-5 lg:gap-[37px] rounded-xl">
                    <img src={Equity} alt="Equity" className="" />
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-[#323334] font-neue text-lg lg:text-xl">Equity Partnerships</p>
                        <p className="text-sm lg:text-base font-neue text-[#646668]">
                            Shared ownership with the potential for high returns.
                        </p>
                    </div>
                </div>
                <div className="h-[540px] lg:h-auto  py-[32px] px-5 shadow-xl flex flex-col gap-[37px] rounded-xl">
                    <img src={Debt} alt="Debt" className="" />
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-[#323334] font-neue text-lg lg:text-xl">Debt Financing</p>
                        <p className="text-sm lg:text-base font-neue text-[#646668]">
                            Secure, structured financing with competitive yields.
                        </p>
                    </div>
                </div>
                <div className="h-[540px] lg:h-auto py-[32px] px-5 shadow-xl flex flex-col gap-[37px] rounded-xl">
                    <img src={Profit} alt="Profit" className="" />
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-[#323334] font-neue text-lg lg:text-xl">Profit-Sharing Models</p>
                        <p className="text-sm lg:text-base font-neue text-[#646668]">
                            A transparent model for equitable financial success.
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div 
            className='mt-[138px] lg:mt-[190px] w-full flex flex-col items-start gap-[36px] px-5 lg:px-[100px]'
            data-aos="fade-up" 
            data-aos-duration="3000"
        >
            <p className="font-neue text-[#000] text-[24px] font-bold lg:text-[40px]">Key Benefits</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                <div className=" h-[132px] flex items-center bg-[#F3ECE7] rounded-xl p-2 gap-5 border-[5px] border-y-0 border-r-0 border-l-[#090540]">
                    <div className='bg-[#FFFFFF] w-[80px] h-[50px] rounded-full flex items-center justify-center'>
                        <img src={Door} alt='Door' className='w-[32px] h-[32px]' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-neue text-[#323334] font-bold text-sm lg:text-[20px]">Global Diversification</p>
                        <p className="text-sm text-[#646668] font-neue lg:text-base">
                            Access stable, high-growth markets, 
                            including the UK’s thriving property sector.
                        </p>
                    </div>
                </div>

                <div className=" h-[132px] flex items-center bg-[#F5F7F8] rounded-xl p-2 gap-5 border-[5px] border-y-0 border-r-0 border-l-[#090540]">
                    <div className='bg-[#FFFFFF] w-[80px] h-[50px] rounded-full flex items-center justify-center'>
                        <img src={Door} alt='Door' className='w-[32px] h-[32px]' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-neue text-[#323334] font-bold text-sm lg:text-[20px]">Risk Management:</p>
                        <p className="text-sm text-[#646668] font-neue lg:text-base">
                            Leverage strategic partnerships and a well-researched, 
                            expert-driven investment approach.
                        </p>
                    </div>
                </div>

                <div className=" h-[132px] flex items-center bg-[#F8F9F7] rounded-xl p-2 gap-5 border-[5px] border-y-0 border-r-0 border-l-[#090540]">
                    <div className='bg-[#FFFFFF] w-[80px] h-[50px] rounded-full flex items-center justify-center'>
                        <img src={Door} alt='Door' className='w-[32px] h-[32px]' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-neue text-[#323334] font-bold text-sm lg:text-[20px]">Collaborative Growth</p>
                        <p className="text-sm text-[#646668] font-neue lg:text-base">
                            Partner with experienced professionals to achieve success on a global scale.
                        </p>
                    </div>
                </div>
            </div>
            <button
                type='button'
                className='bg-[#090540] h-[40px] rounded-lg flex items-center justify-center w-[113px]'
            >
                <p className='text-[#fff] font-neue'>Contact us</p>
            </button>
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