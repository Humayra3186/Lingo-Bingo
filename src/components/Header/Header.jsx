import React, { useContext, useState } from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from '../../AuthProvider';

const Header = () => {

    const navigate = useNavigate()

    const {user,logOut,photo,reg} = useContext(AuthContext)
    console.log(user)

    const handleLogOut =()=>{
        logOut()
        .then(() => {
           navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }

    const [open, setOpen] = useState(false)
    return (
        <div className='py-6 bg-[#ffffff9f] shadow-md backdrop-blur  sticky top-0 z-10'>

            <div className='w-11/12 mx-auto flex items-center justify-between' >


                <div className={`text-[1.2rem] lg:hidden`} onClick={() => { setOpen(!open) }}>
                    {
                        open ? <RxCross2 className='text-[1.3rem] font-semibold'></RxCross2> : <IoMenuSharp className='text-[1.3rem] font-semibold' ></IoMenuSharp>
                    }

                </div>


                <div className={`bg-gray-600 p-4 lg:hidden absolute   duration-[600ms]  pt-4 pl-7 w-48 top-[5.5rem] h-screen ${open ? "  left-0" : "left-[-13rem]"}`}>

                    <ul className=' text-slate-200 text-[0.8rem] lg:text-base gap-6 lg:gap-12 '>
                        <li className='mb-2 font-semibold text-[1.1rem]  '><NavLink to={"/"} >Home</NavLink></li>
                        <li className=' mb-2 font-semibold text-[1.1rem] '><NavLink to={"/learning"} >Start-learning</NavLink></li>
                        <li className='mb-2 font-semibold text-[1.1rem] '><NavLink to={"/tutorial"} >Tutorials</NavLink></li>
                        <li className='mb-2 font-semibold text-[1.1rem] '><NavLink to={"/about"} >About-Us</NavLink></li>
                        {
                        user && <li className='mb-2 font-semibold text-[1.1rem] ' ><NavLink to={"/profile"} >My Profile</NavLink></li>
                    }
                    </ul>


                </div>


                <div className='flex items-end'>
                    <span className='logo text-[1.6rem] lg:text-[2rem]  italic   font-extrabold  bg-gradient-to-b from-cyan-400 to-blue-800 bg-clip-text text-transparent '>L</span>
                    <p className='text-[1.2rem] lg:text-[1.5rem]  italic   font-extrabold font-serif text-slate-700 ' >ingoBingo</p>
                </div>

                <ul className='hidden lg:flex text-[0.9rem] gap-6 lg:gap-12'>
                    <li className='font-semibold text-slate-500 hover:text-[#0392c5]'><NavLink to={"/"} >Home</NavLink></li>
                    <li className='font-semibold text-slate-500 hover:text-[#0392c5]'><NavLink to={"/learning"} >Start-learning</NavLink></li>
                    <li className='font-semibold text-slate-500 hover:text-[#0392c5]'><NavLink to={"/tutorial"} >Tutorials</NavLink></li>
                    <li className='font-semibold text-slate-500 hover:text-[#0392c5]'><NavLink to={"/about"} >About-Us</NavLink></li>
                    {
                        user && <li className='font-semibold text-slate-500 hover:text-[#0392c5]'><NavLink to={"/profile"} >My Profile</NavLink></li>
                    }

                </ul>

                <div >
                     {
                        user? <div className='flex justify-center gap-3 items-center'>
                            {reg? <img className='w-[2.8rem] h-[2.8rem] rounded-full' src={user.photoURL} alt="" />:<img className='w-[2.8rem] h-[2.8rem] rounded-full' src={photo} alt="" /> }
                            <Link onClick={handleLogOut} className='py-2 px-3 rounded-lg bg-gradient-to-b from-cyan-400 to-blue-700 text-white font-bold'>LogOut</Link>
                        </div> :
                        <Link to={"/login"} className='py-2 px-3 rounded-lg bg-gradient-to-b from-cyan-400 to-blue-700 text-white font-bold'>Login</Link>
                     }
                </div>
                
            </div>

        </div>


    );
};

export default Header;