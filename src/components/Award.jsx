import React from 'react';
import fst from "../assets/A1.jpeg"
import snd from "../assets/A2.jpeg"
import trd from "../assets/A3.png"
import futh from "../assets/A4.jpg"
import fiv from "../assets/A5.png"
import six from "../assets/A6.webp"
import svn from "../assets/A7.png"

const Award = () => {
    return (
        <div>
             <div className='flex flex-col items-center justify-center mb-12'><p className='inline-block text-[1.4rem] font-extrabold text-cyan-600  text-center mb-2 '>An award-winning <br /> teaching & learning experience!</p>
                    <p className='text-gray-500  text-[0.8rem]'>Teachers and learners are doing amazing things with Lingo-Bingo</p>

                </div>

                <div className='w-[55%] mb-[3rem] mx-auto flex justify-between'>
                    <div className='w-[10rem] h-[7rem]'>
                        <img className='w-full h-full' src={fst} alt="" />
                    </div>
                    <div className='w-[10rem] h-[7rem]'>
                        <img className='w-full h-full' src={snd} alt="" />
                    </div>
                    <div className='w-[10rem] h-[7rem]'>
                        <img className='w-full h-full' src={trd} alt="" />
                    </div>
                   

                </div>
                <div>

                <div className='w-[80%] lg:w-[65%] mx-auto flex justify-between'>
                    <div className='w-[10rem] h-[7rem]'>
                        <img className='w-full h-full' src={futh} alt="" />
                    </div>
                    <div className='w-[10rem] h-[7rem]'>
                        <img className='w-full h-full' src={fiv} alt="" />
                    </div>
                    <div className='w-[10rem] h-[7rem]'>
                        <img className='w-full h-full' src={six} alt="" />
                    </div>
                    <div className='w-[10rem] h-[7rem]'>
                        <img className='w-full h-full' src={svn} alt="" />
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Award;