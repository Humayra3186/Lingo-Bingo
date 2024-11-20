import React from 'react';

import imgone from '../../assets/imgone.png'
import imgtwo from '../../assets/imgsix.jpg'
import imgthr from '../../assets/imgtrhee.jpg'
import imgfur from '../../assets/imgfour.webp'
import imgfiv from '../../assets/five.jpg'
import imgSix from '../../assets/img2.jpeg'
import wave from '../../assets/Blue-Background-PNG.gif'
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Pagination , Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='md:h-[35rem]   md:flex  '>
            <div className='md:w-[50%] pt-4 bg-[#a5a2a217] flex flex-col items-center justify-center md:mb-14  px-6'><p className='italic font-serif  inline-block text-[2.4rem] font-extrabold text-cyan-600 text-center mb-2 animate__animated animate__slower animate__infinite animate__delay-[1.5s] animate__pulse'>Lets learn <br />language & Build career</p>
            
            <img className='w-[30rem] h-[7rem]' src={wave} alt="" />
            </div>
             <Swiper
        slidesPerView={1}
        spaceBetween={20}
        lazy={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,

        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img className='  pb-14' src={imgone} alt="" /></SwiperSlide>
       
         <SwiperSlide>
                       <img className=' pb-14' src={imgtwo} alt="" /></SwiperSlide>
                    <SwiperSlide>
                       <img className='  pb-14' src={imgthr} alt="" /></SwiperSlide>
                    <SwiperSlide>
                       <img className='  pb-14' src={imgfur} alt="" /></SwiperSlide>
                    <SwiperSlide>
                       <img className=' pb-14' src={imgfiv} alt="" /></SwiperSlide>
                    <SwiperSlide>
                        <img className='  pb-14' src={imgSix} alt="" /></SwiperSlide>

  
        
      </Swiper>
        </div>
    );
};

export default Slider;