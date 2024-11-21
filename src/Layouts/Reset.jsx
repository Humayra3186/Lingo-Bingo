import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useRef } from 'react';
import auth from '../firebaseConfig';
import { AuthContext } from '../AuthProvider';

const Reset = () => {
     
    const{defalt} = useContext(AuthContext)

    const handleResetBtn =(e)=>{
    e.preventDefault();
    const email = e.target.email.value
    sendPasswordResetEmail(auth,email)
     .then(() => {
      alert("Check your email to reset password")
          window.location.href = 'https://mail.google.com'
      
    })
    .catch((error) => {
     
      const errorMessage = error.message;
      console.log(errorMessage)
    })
    }
    return (
       <>
       <div className='flex flex-col justify-center items-center min-h-screen  bg-base-200 gap-6 pb-[9rem] pt-[1rem]'>
        
             <div className="card w-full bg-white max-w-sm shrink-0 ">
      <form  onSubmit={handleResetBtn} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  name='email' type="email" placeholder="email" defaultValue={defalt}  className="input input-bordered" required />
        </div>
        <button  className="btn  bg-gradient-to-b text-white from-cyan-500 to-blue-500">Reset password</button>
        </form>
        </div>
        </div>
       </>
    );
};

export default Reset;