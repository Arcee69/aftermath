import React, { useState } from 'react'
import Girl from "../../assets/png/girl.png"
import Shapes from "../../assets/png/shapes.png"

const Home = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

  return (
    <div className='w-full'>
        <div className='w-full h-[672px] bg-[#19191A99] flex flex-col items-center justify-center'>
            <div className='w-[938px] mx-auto gap-[40px] flex flex-col items-center'>
                <p className='font-neue font-bold text-[60px] text-[#fff] leading-[80px] text-center'>
                    PURCHASE OR REFINANCE PROPERTY IN THE UK
                </p>
                <p className='text-center font-neue text-[#F4F4F4] text-xl'>
                    Helping you purchase or refinance UK property with ease
                </p>
                <button className='bg-[#F2F2F3] w-[157px] h-[45px] rounded-lg flex items-center justify-center'>
                    <p className='font-neue text-[#090540] font-bold'>Get started today</p>
                </button>
            </div>
        </div>
        <div className='mt-[158px] pl-[100px] w-full flex items-center justify-between'>
            <div className='w-[531px] flex flex-col gap-[36px]'>
                <div className='flex flex-col gap-5'>
                    <p className='font-neue text-[#323334] text-[40px]'>Why Choose Us?</p>
                    <p className='text-base text-[#646668] font-neue'>
                        Our strength as a specialist mortgage broker is providing access to residential 
                        and buy to let property finance from £150,000 to £25m.
                    </p>
                </div>
                <div className='flex flex-col gap-[33px]'>
                    <div className='flex items-center h-[180px] w-full rounded-lg gap-3 p-4 bg-[#F3ECE7]'>
                        <div className='bg-[#FFFFFF] w-[200px] h-[100px] rounded-full'></div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#323334] font-bold font-neue text-[20px]'>Expert Guidance</p>
                            <p className='text-[#646668] text-base'>
                                Navigating the UK mortgage market can be complex, 
                                our experienced team offers step-by-step guidance to ensure the process is as smooth as possible.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center h-[180px] w-full rounded-lg gap-3 p-4 bg-[#F5F7F8]'>
                        <div className='bg-[#FFFFFF] w-[200px] h-[100px] rounded-full'></div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#323334] font-bold font-neue text-[20px]'>Tailored Solutions</p>
                            <p className='text-[#646668] text-base'>
                                We understand unique challenges and opportunities and we offer mortgage products 
                                that are flexible and customized to your financial circumstances.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center h-[180px] w-full rounded-lg gap-3 p-4 bg-[#F8F9F7]'>
                        <div className='bg-[#FFFFFF] w-[200px] h-[100px] rounded-full'></div>
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
            <div className='w-6/12 relative'>
                <img src={Girl} alt='Girl' className='w-[473px] h-[648px]' />
                <img src={Shapes} alt='Shapes' className='w-[595px] h-[884px] absolute -top-20 -z-10' />
            </div>
        </div>

        <div className='flex flex-col w-full mt-[100px] px-[100px]'>
            <div className='w-10/12 mx-auto px-[100px]  gap-[56px] flex flex-col items-center'>
                <div className='flex flex-col items-center gap-5'>
                    <div className='flex flex-col items-center w-[242px]'>
                        <p className='font-neue text-[40px] font-bold'>Our Services</p>
                        <p className='font-inter font-semibold text-[#52507A]'>
                            Interest only and interest roll up options (no monthly payments)
                        </p>
                    </div>
                    <p className='font-neue w-[460px] text-center text-base text-[#646668]'>
                        Our services cater to diverse needs, from families with loved ones in the UK to those earning 
                        in foreign currencies. We provide bespoke terms and fast, efficient service to make your property 
                        journey as seamless as possible.
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className=' h-[401px] p-5 bg-[#F3ECE7] flex flex-col gap-[28px]'>
                        <div className='w-[88px] h-[88px] bg-[#FFFFFF] rounded-full'></div>
                        <p className='text-[#323334] w-[275px] font-neue text-lg leading-[24px] font-bold'>
                            Mortgage Finance for Nigerian Residents
                        </p>
                        <p className='font-neue text-[#646668] text-base'>
                            Our strength as a specialist mortgage broker is providing access to residential and 
                            buy to let property finance from £150,000 to £25m.
                        </p>
                        <button
                            type='button'
                            className='w-[108px] h-[40px] rounded-lg bg-[#090540] flex items-center justify-center'
                        >
                            <p className='text-[#fff] font-neue font-bold'>Book now</p>
                        </button>
                    </div>
                    <div className=' h-[401px] p-5 bg-[#F3ECE7] flex flex-col gap-[28px]'>
                        <div className='w-[88px] h-[88px] bg-[#FFFFFF] rounded-full'></div>
                        <p className='text-[#323334] font-neue w-[359px] leading-[24px] text-lg font-bold'>
                            Property Finance for Those Paid in Foreign Currency
                        </p>
                        <p className='font-neue text-[#646668] text-base'>
                            Get pre-approval terms within 24 hours, giving you a clear 
                            picture of what you can afford and moving you closer to securing your UK property.
                        </p>
                        <button
                            type='button'
                            className='w-[108px] h-[40px] rounded-lg bg-[#090540] flex items-center justify-center'
                        >
                            <p className='text-[#fff] font-neue font-bold'>Book now</p>
                        </button>
                    </div>
                    <div className='h-[401px] p-5 bg-[#F3ECE7] flex flex-col gap-[28px]'>
                        <div className='w-[88px] h-[88px] bg-[#FFFFFF] rounded-full'></div>
                        <p className='text-[#323334] font-neue text-lg w-[259px] leading-[24px] font-bold'>
                            Property Finance for Nigerian Families in the UK
                        </p>
                        <p className='font-neue text-[#646668] text-base'>
                            For Nigerian citizens with families, whether you're purchasing a family home or refinancing, 
                            we can provide mortgages that support your long-term plans.
                        </p>
                        <button
                            type='button'
                            className='w-[108px] h-[40px] rounded-lg bg-[#090540] flex items-center justify-center'
                        >
                            <p className='text-[#fff] font-neue font-bold'>Book now</p>
                        </button>
                    </div>
                    <div className='h-[401px] p-5 bg-[#F3ECE7] flex flex-col gap-[32px]'>
                        <div className='w-[88px] h-[88px] bg-[#FFFFFF] rounded-full'></div>
                        <p className='text-[#323334] font-neue text-lg w-[259px] leading-[24px] font-bold'>
                            Pre-Approval Within 24 Hours
                        </p>
                        <p className='font-neue text-[#646668] text-base'>
                            We understand the importance of moving quickly in the property market. 
                            That’s why we offer pre-approval within 24 hours, helping you take the first step toward 
                            securing your property.
                        </p>
                        <button
                            type='button'
                            className='w-[108px] h-[40px] rounded-lg bg-[#090540] flex items-center justify-center'
                        >
                            <p className='text-[#fff] font-neue font-bold'>Book now</p>
                        </button>
                    </div>

                </div>

            </div>
        </div>

        <div className='mt-[242px] w-full px-[100px] '>
            <div className='bg-[#B4C2A9] w-full h-[570px] rounded-lg py-[100px]'>
                <div className='w-[749px] mx-auto flex flex-col items-center gap-[32px]'>
                    <p className='text-[#090540] font-bold text-[50px] leading-[64px] text-center'>
                        WE CAN HELP YOU LEVERAGE YOUR EXISTING ASSETS TO GET THE BEST DEALS
                    </p>
                    <p className='text-[#646668] font-neue text-base text-center'>
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

        <div 
            className='bg-[#090540] h-[987px] mt-[242px] flex pl-[100px]  justify-between py-[100px] '
        >
            <div className='flex flex-col w-[379px] gap-6'>
                <p className='text-[48px] text-[#fff] font-bold'>Contact Us</p>
                <p className='font-neue text-base text-[#E1E7DC]'>
                    Through our market knowledge we can deliver bespoke terms based on your requirements.
                </p>
                <div className='flex flex-col items-start gap-[22px] '>
                
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
                        className='w-[101px] h-[44px] bg-[#fff] flex flex-col items-center justify-center rounded-lg'
                    >
                        <p className='text-[#090540] font-semibold text-base'>Submit</p>
                    </a>

                </div>
            </div>
            <div></div>
        </div>

    </div>
  )
}

export default Home