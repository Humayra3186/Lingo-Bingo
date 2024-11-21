import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { MdWavingHand } from "react-icons/md";
import { Link } from 'react-router-dom';

const Myprofile = () => {
    const { name, mail, photo, reg, user } = useContext(AuthContext)

    return (
        <div className='bg-base-200 min-h-screen flex justify-center items-center'>
            <div className='bg-white w-[70%] md:w-[40%] mx-auto '>
                <div className='bg-[#b5e0f5] flex flex-col font-bold  justify-center items-center py-3'>
                    <h1 className='flex justify-center items-center text-[1.2rem]   gap-3'>Welcome <MdWavingHand className='text-[#efb446]'></MdWavingHand></h1>
                    {
                    reg ? <p className=' text-[#026ea0]'>{user.displayName
                    }</p> : <p className=' text-[#026ea0]'>{name}</p>
                }
                  
                </div>

                <div className='flex justify-center item-center mt-8 mb-4' >
                    {
                        reg ? <img className='w-[5rem] h-[5rem] border rounded-full' src={user.photoURL
                        } alt="" /> : <img className='w-[5rem] h-[5rem] border rounded-full' src={photo} alt="" />
                    }

                </div>
                {
                    reg ? <p className='text-center text-cyan-600 font-semibold text-[0.9rem]'>{user.displayName
                    }</p> : <p className='text-center text-cyan-600 font-semibold text-[0.9rem]'>{name}</p>
                }
                <p className='text-center mb-8 text-cyan-700 font-semibold '>{mail}</p>


                <Link to={'/update'} className="btn w-full bg-zinc-700   text-white mt-8">Update Profile</Link>


            </div>

        </div>
    );
};

export default Myprofile;