import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { MdWavingHand } from 'react-icons/md';
import Footer from './Footer';

const MainLayout = () => {
    const {user , name ,reg } = useContext(AuthContext)
    return (
        <div className='relative'>
            {
                user && <div className='bg-[#b5e0f5] flex flex-col font-bold  justify-center items-center py-3'>
                <h1 className='flex justify-center items-center text-[1.2rem]   gap-3'>Welcome to Ling-Bingo <MdWavingHand className='text-[#efb446]'></MdWavingHand></h1>
                {
                reg ? <p className=' text-[#026ea0]'>{user.displayName
                }</p> : <p className=' text-[#026ea0]'>{name}</p>
            }
              
            </div>
            }
            <Header></Header>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;