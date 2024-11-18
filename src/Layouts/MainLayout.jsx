import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='relative'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;