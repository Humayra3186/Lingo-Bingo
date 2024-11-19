
import React from 'react';
import imgone from '../../assets/imgone.png'
import imgtwo from '../../assets/imgsix.jpg'
import imgthr from '../../assets/imgtrhee.jpg'
import imgfur from '../../assets/imgfour.webp'
import imgfiv from '../../assets/five.jpg'
import imgSix from '../../assets/img2.jpeg'

import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Banner = () => {

    return (


        <div >
            <div className='h-[35rem] w-[60%] mx-auto p-16 rounded-2xl '>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,

                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper "
                >
                    <SwiperSlide>

                        <img className='h-full w-full rounded-2xl' src={imgone} alt="" />

                    </SwiperSlide>
                    <SwiperSlide>
                       <img className='h-full w-full' src={imgtwo} alt="" /></SwiperSlide>
                    <SwiperSlide>
                       <img className='h-full w-full' src={imgthr} alt="" /></SwiperSlide>
                    <SwiperSlide>
                       <img className='h-full w-full' src={imgfur} alt="" /></SwiperSlide>
                    <SwiperSlide>
                       <img className='h-full w-full' src={imgfiv} alt="" /></SwiperSlide>
                    <SwiperSlide>
                        <img className='h-full w-full' src={imgSix} alt="" /></SwiperSlide>

                </Swiper>


            </div>
        </div>
    );
};

export default Banner;