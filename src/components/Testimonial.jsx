import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Testimonial = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (

        <div className='my-14'>
            <div className='flex flex-col items-center justify-center mb-10'><p className='inline-block text-[1.4rem] font-extrabold text-cyan-600  text-center mb-2 '>All Testimonial</p>
            <p className='text-gray-500 font-semibold text-[0.9rem]'>Teachers and learners are doing amazing things with Lingo-Bingo</p>
            
            </div>


            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-[80%] mx-auto grid grid-cols-3  gap-6 pb-14'>

                        <div className='h-[20rem] bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                            <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                            <h2 className='text-white pt-3 flex-grow'>With the growth seen during this 1st semester, it was a no-brainer as to whether to further our investment with Vocabulary.com.</h2>

                            <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>6th grade student</h1>

                        </div>
                        <div className='h-[20rem] bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                            <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                            <h2 className='text-white pt-3 flex-grow'>Vocabulary.com has helped immensely in broadening my language horizons, not to mention that it was extremely enjoyable to play the vocab games and learn while having fun.</h2>

                            <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>College student</h1>

                        </div>

                        <div className='h-[20rem] bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                            <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                            <h2 className='text-white pt-3 flex-grow'>I love the words and the thrill of stacking points! While it's engaging like other games, your parents can't say you're wasting your time!.</h2>

                            <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>
                            10th grade student</h1>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Testimonial;