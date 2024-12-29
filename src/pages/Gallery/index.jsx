import React from 'react'

import Carpet from "../../assets/png/logo_bg.png"
import GalleryA from "../../assets/png/gallery_a.png"
import GalleryB from "../../assets/png/gallery_b.png"
import GalleryC from "../../assets/png/gallery_c.png"
import GalleryD from "../../assets/png/gallery_d.png"
import GalleryE from "../../assets/png/gallery_e.png"
import GalleryF from "../../assets/png/gallery_f.png"
import GalleryG from "../../assets/png/gallery_g.png"
import GalleryH from "../../assets/png/gallery_h.png"

import Logo from "../../assets/svg/logo_big.svg"


const Gallery = () => {
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
                        <p className='font-neue text-[24px] text-[#323334] lg:text-[40px] font-bold'>Our Gallery</p>
                    </div>
                    <p className='font-neue lg:w-[460px] text-center text-xs lg:text-base text-[#646668]'>
                        Browse through our gallery of properties we have acquired for our clients over the years.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <img src={GalleryA} alt='GalleryA' className='' />
                    <img src={GalleryB} alt='GalleryB' className='' />
                    <img src={GalleryC} alt='GalleryC' className='' />
                    <img src={GalleryD} alt='GalleryD' className='' />
                    <img src={GalleryE} alt='GalleryE' className='' />
                    <img src={GalleryF} alt='GalleryF' className='' />
                    <img src={GalleryG} alt='GalleryG' className='' />
                    <img src={GalleryH} alt='GalleryH' className='' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Gallery