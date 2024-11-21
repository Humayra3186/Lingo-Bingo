import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import CountUp from 'react-countup';
const Success = () => {
    return (
        <div className='success bg-[#a5a2a217] pt-7 pb-14'>

            <div className='flex flex-col items-center justify-center mb-10'><p className='inline-block text-[1.4rem] font-extrabold text-[#1470a9]  text-center mb-2 '>Our Success</p>
                <p className='text-gray-500  text-[0.8rem] text-center'>We all try our best to increase all the learning related rating thats <br /> why Users are fully satisfied. </p>

            </div>
            <div className=' w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[4rem]  py-6'>




                <div className='bg-white rounded-xl shadow-lg border'>
                    <h2 className='bg-[#c9e9fa74] border-b pb-4 text-[1.3rem] font-bold text-[#1ab1ed] flex justify-center items-center gap-2  mb-4 p-3'><FaUser className=' text-slate-600 text-[1.1rem] '></FaUser> User </h2>

                    <div className='w-[10rem] h-[5rem] rounded-lg flex justify-center items-center text-center'>
                        <h2 className='text-[2rem] font-semibold text-[#101011] text-center pb-4  '><CountUp
                            start={450}
                            end={500}
                            duration={4}
                            suffix='+'

                        /> </h2>
                    </div>

                </div>

                <div className='bg-white  rounded-xl shadow-lg border'>
                    <h2 className='bg-[#c9e9fa74] border-b pb-4 text-[1.3rem] font-bold text-[#1ab1ed] flex justify-center items-center gap-2  mb-4 p-3'><FaBookmark className=' text-slate-600 text-[1.1rem] '></FaBookmark> Lesson </h2>

                    <div className='w-[10rem] h-[5rem] rounded-lg flex justify-center items-center'>
                        <h2 className='text-[2rem] font-semibold text-[#101011] text-center pb-4  '><CountUp
                            start={0}
                            end={10}
                            duration={4}
                            suffix='+'

                        /> </h2>
                    </div>

                </div>
                <div className='bg-white  rounded-xl shadow-lg border'>
                    <h2 className='bg-[#c9e9fa74] border-b pb-4 text-[1.3rem] font-bold text-[#1ab1ed] flex justify-center items-center gap-2  mb-4 p-3'><FaBookOpen className=' text-slate-600 text-[1.1rem] '></FaBookOpen> Vocabulary </h2>

                    <div className='w-[10rem] h-[5rem] rounded-lg flex justify-center items-center'>
                        <h2 className='text-[2rem] font-semibold text-[#101011] text-center pb-4  '><CountUp
                            start={150}
                            end={200}
                            duration={4}
                            suffix='+'

                        /> </h2>
                    </div>

                </div>
                <div className='bg-white rounded-xl shadow-lg border'>
                    <h2 className='bg-[#c9e9fa74] border-b pb-4 text-[1.3rem] font-bold text-[#1ab1ed] flex justify-center items-center gap-2  mb-4 p-3'><FaPlay className=' text-slate-600 text-[1.1rem] '></FaPlay> Tutorial </h2>

                    <div className='w-[10rem] h-[5rem] rounded-lg flex justify-center items-center'>
                        <h2 className='text-[2rem] font-semibold text-[#101011] text-center pb-4 '><CountUp
                            start={50}
                            end={100}
                            duration={4}
                            suffix='+'

                        /> </h2>
                    </div>

                </div>




            </div>
        </div>
    );
};

export default Success;