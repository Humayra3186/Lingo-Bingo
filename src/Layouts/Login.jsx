import React, { useContext, useRef, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/google.webp'
import { AuthContext } from '../AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebaseConfig';

const Login = () => {
  const emailRef  = useRef()
  const navigate = useNavigate()
    const {user, setUser , login,setDefalt} = useContext(AuthContext)
    const [show , setShow] = useState(false)
    const [errorMessag , setError]=useState('')
    const handleLogin =(e)=>{
      e.preventDefault()
      const form = new FormData(e.target)
      const email = form.get('email')
      const password = form.get('password')

      login(email,password)
      .then((userCredential) => {
       
      
       navigate("/");
       setUser(userCredential)

      })
      .catch((error) => {
     
        const errorMessage = error.message;
        setError(errorMessage)
      });
    console.log(user)
  
    }

    const handleReset = ()=>{
     const email = emailRef.current.value;
     setDefalt(email);
     navigate('/reset');

    }
    return (
        <>
        
        <div className='flex flex-col justify-center items-center  bg-base-200 gap-6 pb-[9rem] pt-[1rem]'>
        <h1 className='text-[2rem] font-bold text-sky-500'>Login Now!</h1>
             <div className="card w-full bg-white max-w-sm shrink-0 ">
      <form onSubmit={handleLogin} className="card-body pb-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={emailRef} name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
        
         <div className='relative'>
         <input name='password' type={show? "text" : "password"} placeholder="password" className='input input-bordered w-full' required />
          <div onClick={()=>{setShow(!show)}} className='pr-2 absolute right-4 top-4 cursor-pointer'>
          {
            show? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
          }
          </div>
         </div>
         <p className='text-[0.8rem] text-red-500 pt-2'>{errorMessag}</p>
       
          <label onClick={handleReset}  className="label">
            <a href="#"  className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-gradient-to-b text-white from-cyan-500 to-blue-500">Login</button>
        </div>
      </form>
      <p className='text-center pt-5 pb-10'>Don't have any account? <Link to={'/register'} className='text-[1.2rem] text-sky-600 '>Register</Link></p>
    </div>
    
    <div className="divider my-0 w-[20rem] mx-auto">OR</div>
       <button className='flex justify-center items-center px-[6rem] bg-white py-1 rounded-lg'><img className='w-12' src={google} alt="" /> Login With Google</button>
    
        </div>
        </>
    );
};

export default Login;