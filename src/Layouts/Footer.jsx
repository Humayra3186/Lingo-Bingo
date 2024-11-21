import React from 'react';
import tube from "../assets/tube.webp"
import face from "../assets/face.webp"
import  twitter from "../assets/Twitter-Logo.wine.png"
import insta from "../assets/insta.webp"

const Footer = () => {
    return (
        <div className='bg-gray-900  '>
            
            <div className='flex flex-col items-center md:flex-row w-10/12 mx-auto  justify-between pb-5 pt-8'>
            <div className='text-center md:text-left '>
             <div className='flex items-end  my-6 text-center md:text-left  pl-10 md:pl-0'>
             <span className='logo text-[1.6rem] lg:text-[2rem]  italic   font-extrabold  bg-gradient-to-b from-cyan-400 to-blue-800 bg-clip-text text-transparent '>L</span>
             <p className='text-[1.2rem] lg:text-[1.5rem]  italic   font-extrabold font-serif text-white ' >ingoBingo</p>
             </div>
             
                <p className='text-gray-400 text-[0.9rem] mb-2'>Phone : +879-5667-567</p>
                <p className='text-gray-400 text-[0.9rem] mb-2'>Email : lingobingo.info@gamil.com</p>
                <p className='text-gray-400 text-[0.9rem] mb-2'>Hotline : 99999</p>
             </div>
             <div className='text-center md:text-left  '>
                <h2 className='text-white font-bold  my-6'>Quick Links</h2>
                <p className='text-gray-400 text-[0.8rem] mb-2'>Home</p>
                <p className='text-gray-400 text-[0.8rem] mb-2'>Start Learning</p>
                <p className='text-gray-400 text-[0.8rem] mb-2'>Tutorial</p>
                <p className='text-gray-400 text-[0.8rem] mb-2'>About Us</p>
                

             </div>
             <div className='text-center md:text-left '>
                <h2 className='text-white font-bold my-6'>Media Link</h2>
               
                <div className='grid grid-cols-2 gap-3'>
                <img className=' bg-white w-[2.5rem] h-[2.5rem]  rounded-full' src={twitter} alt="" />
                <img className=' bg-white w-[2.5rem] h-[2.5rem]  rounded-full' src={insta} alt="" />
                    <img className=' w-[3.5rem] h-[3.5rem]  rounded-full' src={tube} alt="" />
                    <img className=' w-[3rem] h-[3rem]  rounded-full' src={face} alt="" />
                    

                </div>
             </div>
            </div>

           
            <div className='flex justify-center w-full border-t-[0.8px] border-gray-600 '>
                <p className='text-[0.8rem] text-gray-500 py-8 '>
                @2024 Your Company All Rights Reserved.
                </p>
            </div>
            
        </div>
    );
};

export default Footer;