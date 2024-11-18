import React from 'react';
import imgone from '../../assets/imgone.jpg'
import imgtwo from '../../assets/imgsix.jpeg'
import imgthr from '../../assets/img2.jpg'
import imgfur from '../../assets/imgtrhee.jpg'
import imgfiv from '../../assets/imgfour.webp'
import imgSix from '../../assets/five.jpeg'

import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Banner = () => {

    return (


        <div className='h-[35rem] w-full'>

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
                    <div
                        className="hero h-full w-full"
                        style={{
                            backgroundImage: `url(${imgone})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <div className="hero-overlay bg-opacity-75"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div>
                                <h1 className="mb-5 text-5xl font-bold">Let's learn Japanese Language</h1>
                                <p className="mb-5 w-[60%] mx-auto text-center">
                                   To communicate with Japanese and build your career in Japan you have to learn Japanese language
                                </p>
                                <button className='px-5 py-3 rounded-md bg-[#230cf1] text-white text-[1.1rem] font-semibold'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen w-full"
                        style={{
                            backgroundImage: `url(${imgtwo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                  All our users are satisfied with our features and also our learning process.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen w-full"
                        style={{
                            backgroundImage: `url(${imgthr})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Build Your Career In Japan</h1>
                                <p className="mb-5">
                                    Learn Japanese Language and Build your career in Japan.So...
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen w-full"
                        style={{
                            backgroundImage: `url(${imgfur})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen w-full"
                        style={{
                            backgroundImage: `url(${imgfiv})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen w-full"
                        style={{
                            backgroundImage: `url(${imgSix})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div></SwiperSlide>
                
            </Swiper>


        </div>
    );
};

export default Banner;