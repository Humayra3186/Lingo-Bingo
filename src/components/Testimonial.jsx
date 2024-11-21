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
        <>
            <div className='my-14 md:hidden'>
                <div className='flex flex-col items-center justify-center mb-10'><p className='inline-block text-[1.4rem] font-extrabold text-cyan-600  text-center mb-2 '>All Testimonial</p>
                    <p className='text-gray-500  text-[0.8rem]'>Teachers and learners are doing amazing things with Lingo-Bingo</p>

                </div>


                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='h-[20rem] w-[60%] mx-auto bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col pb-14 '>
                            <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                            <h2 className='text-white pt-3 flex-grow'>With the growth seen during this 1st semester, it was a no-brainer as to whether to further our investment with Lingo-Bingo.</h2>

                            <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>6th grade student</h1>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div className='h-[20rem] pb-14 w-[60%] mx-auto bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                        <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                        <h2 className='text-white pt-3 flex-grow'>Lingo-Bingo has helped immensely in broadening my language horizons, not to mention that it was extremely enjoyable to play the vocab games and learn while having fun.</h2>

                        <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>College student</h1>

                    </div></SwiperSlide>
                    <SwiperSlide> <div className='h-[20rem] pb-14 w-[60%] mx-auto bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                        <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                        <h2 className='text-white pt-3 flex-grow'>I love the words and the thrill of stacking points! While it's engaging like other games, your parents can't say you're wasting your time!.</h2>

                        <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>
                            10th grade student</h1>

                    </div></SwiperSlide>
                    <SwiperSlide>
                    <div className='h-[20rem] w-[60%] mx-auto pb-14 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>I love how you can master words, gain streaks, and keep us intrigued by what everyone thought were the most boring things on Earth. Vocabulary.com really made words fun.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>
                                    5th grade student</h1>

                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='h-[20rem] w-[60%] mx-auto pb-14 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>I like that it explains words clearly and makes it easy to understand. I always like to check Vocabulary.com whenever I don't understand definitions from other dictionaries.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>
                                    12th grade student</h1>

                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='h-[20rem] w-[60%] mx-auto  pb-14 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>I like the descriptions of the words at the end of a question. They are funny and help me understand the word better.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>
                                    5th grade student</h1>

                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='h-[20rem] w-[60%] mx-auto pb-14  bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>Finally found a site that makes it easy to understand the definition of words by using more conversational definitions. Love this site.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>Adult learner</h1>

                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='h-[20rem] w-[60%] mx-auto pb-14  bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>Your site describes word connotations rather than simply providing definitions divorced from usage. This, combined with usage examples, helps users understand nuances in a way that doesn't exist elsewhere.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>
                                    Adult learner</h1>

                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='h-[20rem] w-[60%] mx-auto pb-14  bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>I am so grateful for Lingo-Bingo. I have used it for years now. I reach for it all the time and recommend it to my friends and family.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>

                                    Adult learner</h1>

                            </div>
                    </SwiperSlide>

                </Swiper>
            </div>





            <div className='my-14 hidden md:block'>
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

                            <div className='h-auto bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>With the growth seen during this 1st semester, it was a no-brainer as to whether to further our investment with Lingo-Bingo.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>6th grade student</h1>

                            </div>
                            <div className='h-auto  bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>Lingo-Bingo has helped immensely in broadening my language horizons, not to mention that it was extremely enjoyable to play the vocab games and learn while having fun.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>College student</h1>

                            </div>

                            <div className='h-auto  bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>I love the words and the thrill of stacking points! While it's engaging like other games, your parents can't say you're wasting your time!.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>
                                    10th grade student</h1>

                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[80%] mx-auto grid grid-cols-3  gap-6 pb-14'>

                            <div className='h-auto  bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>I love how you can master words, gain streaks, and keep us intrigued by what everyone thought were the most boring things on Earth. Lingo-Bingo really made words fun.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>
                                    5th grade student</h1>

                            </div>
                            <div className='h-auto  bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>I like that it explains words clearly and makes it easy to understand. I always like to check Vocabulary.com whenever I don't understand definitions from other dictionaries.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>
                                    12th grade student</h1>

                            </div>

                            <div className='h-auto  bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>I like the descriptions of the words at the end of a question. They are funny and help me understand the word better.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>
                                    5th grade student</h1>

                            </div>

                        </div>


                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='w-[80%] mx-auto grid grid-cols-3  gap-6 pb-14'>

                            <div className='h-auto  bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>Finally found a site that makes it easy to understand the definition of words by using more conversational definitions. Love this site.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>Adult learner</h1>

                            </div>
                            <div className='h-auto  bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>Your site describes word connotations rather than simply providing definitions divorced from usage. This, combined with usage examples, helps users understand nuances in a way that doesn't exist elsewhere.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>
                                    Adult learner</h1>

                            </div>

                            <div className='h-auto  bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-5 flex flex-col '>
                                <FaQuoteLeft className=' text-[#093e77] text-[1.5rem]'></FaQuoteLeft>
                                <h2 className='text-white pt-3 flex-grow'>I am so grateful for Vocabulary.com. I have used it for years now. I reach for it all the time and recommend it to my friends and family.</h2>

                                <h1 className=' text-[#03458c] text-[1.1rem] font-bold font-serif italic'>

                                    Adult learner</h1>

                            </div>

                        </div>

                    </SwiperSlide>

                </Swiper>
            </div>
        </>

    );
};

export default Testimonial;