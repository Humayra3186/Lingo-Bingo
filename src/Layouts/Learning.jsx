import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiClick } from "react-icons/gi";
import { AuthContext } from '../AuthProvider';

const Learning = () => {

  
    const lessons = [1,2,3,4,5,6,7,8,9,10]

    return (
        <div className='bg-base-200'>
             <div className='py-7 flex flex-col items-center  bg-gradient-to-b from-cyan-500 to-blue-500   justify-center mb-10'><p className='inline-block text-[1.6rem] font-extrabold text-white  text-center mb-2 '>Learn Japanese <br /> Language With Lingo-Bingo</p>
                    <p className='text-[#ffffffeb]  text-[0.9rem] w-[60%] mx-auto text-center'>Anyone can learn and practice Japanese Language from the staring point as their perspective like listening , reading and also watching tutorials from Ling-Bingo. </p>

                </div>
              <h2 className='mb-4 flex w-[75%] mx-auto text-[#282c2ec5] font-bold text-[1.2rem] mt-3'>Click to learn vocabularies: <GiClick className='text-[#efb661f9] text-[1.3rem]'></GiClick></h2>
            <div className='grid grid-cols-5 pt-3 pb-10 gap-[3rem] w-[75%]  mx-auto'>
            {
                lessons.map(lesson => <Link to={`/lessons/${lesson}`}>
                    <div className='p-6  hover:shadow-lg border-2 rounded-3xl bg-[#bbe2f7a3] border-[#09c4f8] text-center'>
                    <h2 className='font-semibold text-gray-500'>Lesson</h2>
                    <p className='text-[1.2rem] font-serif font-bold'>{lesson}</p>
                </div>
                </Link>)
            }
            </div>
            <div className="bg-white">
            <div className='w-[75%] bg-white  mx-auto pb-10 mt-8'>
            <h1 className='text-[1.5rem] font-bold text-center pt-10 pb-3 text-[#0392c5]'>Watch videos and Do practice</h1>
            <p className='text-gray-500 text-center text-[0.8rem] pb-8'>Are you want to explore more tutorials like this? Click on the view more button to navigate <br /> yourself to our tutorial page and keep learning </p>
            <iframe width="950" height="400" style={{borderRadius:"20px", border:"1px solid gray"}} src="https://www.youtube.com/embed/vEnQtNcR4iA?si=KJ_w8aIyNx9KGlpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className='flex justify-center mt-5'>
            <Link to={'/tutorial'} className='py-2 rounded-lg px-[4rem] bg-gradient-to-b from-cyan-500 to-blue-500    text-white'>View More</Link>
            </div>
            </div>
            </div>



            
        </div>
    );
};

export default Learning;