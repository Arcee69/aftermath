import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Carpet from "../../assets/png/logo_bg.png"
// import GalleryA from "../../assets/png/gallery_a.png"
// import GalleryB from "../../assets/png/gallery_b.png"
// import GalleryC from "../../assets/png/gallery_c.png"
// import GalleryD from "../../assets/png/gallery_d.png"
// import GalleryE from "../../assets/png/gallery_e.png"
// import GalleryF from "../../assets/png/gallery_f.png"
// import GalleryG from "../../assets/png/gallery_g.png"
// import GalleryH from "../../assets/png/gallery_h.png"

import Logo from "../../assets/svg/logo_big.svg"


const Gallery = () => {
    const [gallery, setGallery] = useState([])

    const getGallery = async () => {
        try {
            const res = await axios.get("https://aik.smhptech.com/api/property");
            console.log(res.data.data, "API Response");
            setGallery(res?.data?.data);
        } catch (err) {
            console.log(err, "Error fetching gallery data");
        }
    };

    useEffect(() => {
        getGallery()
    }, [])


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
                <div className={`${gallery?.length > 0 ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "flex flex-col items-center justify-center"}`}>
                    {
                        gallery?.length > 0 ?
                        gallery?.map((item, index) => (
                            <div
                                key={index}
                                className="h-[324px] w-[340px] lg:w-[400px] relative flex flex-col bg-cover rounded-xl bg-no-repeat"
                                style={{ backgroundImage: `url(${item.main_image})` }}
                            >
                                
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

                                
                                <div className="absolute bottom-14 left-5 z-10">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-white font-semibold uppercase text-base">{item.name}</p>
                                        {/* <p className="text-white text-xl uppercase">{item.address}</p> */}
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <p className="text-2xl lg:text-5xl font-neue text-[#000] mt-10 text-center font-bold">
                                No Property Available
                            </p>
                        )
                    }

                </div>
            </div>
        </div>

    </div>
  )
}

export default Gallery