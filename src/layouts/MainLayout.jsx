import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='bg-[#EAECED]'>
            <Navbar></Navbar>
            <main className='min-h-[calc(100vh-402px)] p-2 lg:w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;