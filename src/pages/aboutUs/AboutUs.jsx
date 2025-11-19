import React from 'react';
import { NavLink, Outlet } from 'react-router';

const AboutUs = () => {
    return (
        <div className='w-full h-[50vh] bg-white rounded-2xl py-15 px-20 space-y-4 mb-3'>
            <div className='w-2xl space-y-2'>
                <h2 className='text-5xl font-bold'>About Us</h2>
                <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <h1 className="border-b border-gray-300 lg:col-span-full mt-3 lg:mt-0"></h1>
            <div className='flex gap-5'>
                <NavLink to={'/aboutUs'} className={({isActive})=> isActive ? 'text-xl text-gray-400 font-bold' : "text-xl text-gray-500" }>Story</NavLink>
                <NavLink to={'/aboutUs/mission'} className={({isActive})=> isActive ? 'text-xl text-gray-500 font-bold' : "text-xl text-gray-500" }>Mission</NavLink>
                <NavLink to={'/aboutUs/success'} className={({isActive})=> isActive ? 'text-xl text-gray-500 font-bold' : "text-xl text-gray-500" }>Success</NavLink>
                <NavLink to={'/aboutUs/teams'} className={({isActive})=> isActive ? 'text-xl text-gray-500 font-bold' : "text-xl text-gray-500" }>Team & Others</NavLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AboutUs;