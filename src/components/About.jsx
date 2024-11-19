import React from 'react';
import back from "../assets/Blue-Background-PNG.gif"
import 'animate.css';
const About = () => {
    return (
        <div className='mt-[4rem] w-11/12 mx-auto'>
            <div className='flex justify-center'><p className='inline-block text-[0.9rem] text-[#093e77] bg-[#bbe2f7a3] text-center  py-1 px-6 rounded-2xl'>About us</p></div>
            <div className='flex justify-center items-center  my-[2.5rem]'>
                <div className='w-[40%]'>
                <h2 className=' text-[2rem] font-bold  text-[#093e77] text-center animate__animated animate__slower animate__infinite animate__delay-[1.5s] animate__slideInLeft '>Our Mission</h2>
                <img className='h-[5.2rem]' src={back} alt="" />
                </div>
                <div className='w-[60%]'>
                    <p className='text-[0.9rem] text-gray-500 text-center '>Our mission is to close the word gap so that students can achieve at higher levels. When learners are equipped with the building blocks of language, they have greater access to education, information, and opportunities.

                        At Lingo-Bingo, we're passionate about growing strong readers, writers, and thinkers. That's what drives us to create innovative tools and engaging experiences that go above and beyond basic definitions to teach for depth of knowledge and enduring understanding.</p>
                </div>

            </div>

            <div  className='flex gap-32 flex-row-reverse justify-center items-center  my-[2.5rem]'>
                <div className='w-[40%]'>
                <h2  className=' text-[1.5rem] font-bold   text-[#093e77]  text-center animate__animated animate__slower animate__infinite animate__delay-[1.5s] animate__slideInRight '>Learn Vocabularies</h2>
                <img className='h-[5.7rem] ' src={back} alt="" />
                </div>
               
                <div className='w-[60%]'>
                   <p className='text-[0.9rem] text-gray-500 text-center '>As an user , You can learn 190+ vocabularies from our website. In our Start-Learning page, there are 10 lessons and every lesson has more than 19 vocabularies.  But, you have to sign up or sign in to start learning vocabularies from today.</p>
                </div>
            </div>
        </div>
    );
};

export default About;