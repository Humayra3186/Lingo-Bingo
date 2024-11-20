import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import google from '../assets/google.webp'
const Register = () => {
    const [show , setShow] = useState(false)
    return (
        <>
         <div className='flex flex-col justify-center items-center  bg-base-200 gap-6 pb-[9rem] pt-[1rem]'>
        <h1 className='text-[2rem] font-bold text-sky-500'>Register Now!</h1>
             <div className="card w-full bg-white max-w-sm shrink-0 ">
      <form className="card-body pb-0">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo-URL</span>
          </label>
          <input type="text" placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
        
         <div className='relative'>
         <input type={show? "text" : "password"} placeholder="password" className='input input-bordered w-full' required />
          <div onClick={()=>{setShow(!show)}} className='pr-2 absolute right-4 top-4 cursor-pointer'>
          {
            show? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
          }
          </div>
         </div>
       
          
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-gradient-to-b text-white from-cyan-500 to-blue-500">Register</button>
        </div>
      </form>
      <p className='text-center pt-5 pb-10'>Already have any account? <Link to={'/login'} className='text-[1.2rem] text-sky-600 '>Login</Link></p>
    </div>
    
    <div className="divider my-0 w-[20rem] mx-auto">OR</div>
       <button className='flex justify-center items-center px-[6rem] bg-white py-1 rounded-lg'><img className='w-12' src={google} alt="" /> Login With Google</button>
    
        </div>
        </>
    );
};

export default Register;