import React from 'react';
import Header from '../Header/Header';
import './Banner.css'
import '../../images/banner-img.png'

const Banner = () => {
    return (
        <div>
           {/* ------------------- banner ------------------- */}
           <div className="grid lg:grid-cols-2 h-screen flex items-center ">
                <div className="banner-content px-5 py-10 order-2 md:order-1">
                    <h2 className="text-xl text-orange-600">Guaranteed & Certified</h2>
                    {/*  ----------------- banner title ----------------*/}
                    <h2 className="text-[40px] font-serif font-semibold leading-normal 
                    text-white">
                        Improve Your Skills by Taking 
                       <span className='underline decoration-teal-600 underline-offset-8'>    High-Quality  </span>   Classes
                     </h2>
                     {/* ------------------ banner text ----------------*/}
                     <p className='text-lg text-white'>Course provides you with the most comfort and <br /> contribution skill and knowledge</p>
                     {/* -------------  search  and find button */}
                     <div className='my-5'>
                         <input type="text" placeholder='search course' className='md:w-[250px]
                         w-[200px] px-5 py-2 md:mr-3 mr-1 rounded-full' />
                         <button className='bg-orange-400 text-white font-semibold md:px-5 px-3 py-2 rounded-full'>Find Course</button>
                     </div>              
                </div>
                {/* ================================ banner img =============== */}
                <div className="banner-img w-full h-full order-1 md:order-2">
                    <img src="https://i.ibb.co/yyj4sMS/ae5ae16a1f8bdad663c96a699d91e646-removebg-preview.png" className="w-full h-full" alt="" />
                </div>
           </div>
        </div>
    );
};

export default Banner;