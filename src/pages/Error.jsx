import React from 'react';

const Error = () => {
    return (
        <div className='w-full justify-center items-center bg-white py-5 md:py-10 rounded-2xl'>
           <img src="https://assets-v2.lottiefiles.com/a/6a21fb9a-1178-11ee-a809-cbf4c1cb708c/KS4fSTQC7T.gif" alt="" className='w-130 mx-auto'/>
           <div className="flex flex-col justify-center items-center gap-5 py-5">
            <h1 className='text-5xl md:text-6xl font-bold text-[#03373D]'>Page Not Found</h1>
            <button className='btn bg-[#CAEB66] md:p-5 md:text-xl'>Go Home</button>
           </div>
        </div>
    );
};

export default Error;