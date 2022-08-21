import React from 'react';

const AchiveSection = () => {
    return (
        <div className=' md:h-screen md:p-4 mb-5'>
             <div className=" backdrop-blur-sm bg-white/30 grid md:grid-cols-2 gap-5 h-full">
                   <div className=''>
                      <img src="https://i.ibb.co/DCXZThS/istockphoto-1226006832-612x612-removebg-preview.png" className="h-[500px]" alt="" />
                   </div>
                   <div className="p-4 flex flex-col justify-center h-full">
                      <h2 className='text-4xl font-semibold text-white font-serif'>Achieve Your Goal With 
                        <span className="text-orange-500"> Coursy </span>
                     </h2>
                     <p className="text-lg text-slate-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, molestias. Suscipit earum reprehenderit dignissimos, voluptates dolor vel perspiciatis velit? Delectus!</p>

                     {/* ------------ course details --------------------*/}
                     <div  className='grid grid-cols-2 gap-3 my-3 p-2 justify-center'>
                            {/* ---------------- text one */}
                            <div className='flex h-full items-center '>
                                <div>
                                    <img src="https://i.ibb.co/tXxgXhj/course-logo-removebg-preview.png" className='w-[60px]' alt="" />
                                </div>
                                <h2 className='text-white'>20K+ online course</h2>
                            </div>
                            {/* ------------------ text two -------------- */}
                            <div className='flex h-full items-center'>
                                <div>
                                    <img src="https://i.ibb.co/VCbwvJV/love-removebg-preview.png" className='w-[40px] ' alt="" />
                                </div>
                                <h2 className='ml-2 text-white'>3.5M+ Rating & Reviews</h2>
                            </div>
                            {/* --------------------- text three --------------------*/}
                            <div className='flex h-full items-center ml-2'>
                                <div className='w-[40px]'>
                                    <img src="https://i.ibb.co/qypwLsr/member-removebg-preview.png" className='w-[60px] bg-green-600 rounded-full' alt="" />
                                </div>
                                <h2 className='ml-2 text-white'>Join Private Group</h2>
                            </div>
                            {/* ------------------ text four --------------- */}
                            <div className='flex h-full items-center'>
                                <div>
                                    <img src="https://i.ibb.co/Jxp5v5R/endator-removebg-preview.png" className='w-[40px] bg-amber-500 rounded-full' 
                                   alt="" />
                                </div>
                                <h2 className='ml-2 text-white'>5K+ Experience Mentor</h2>
                            </div>
                            {/* ---------------- enroll button -------------------*/}
                            <button className='shadow-md hover:shadow-lg mt-4 text-white px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full drop-shadow-lg'>
                              Enroll Now
                          </button>
                     </div>
                   </div>
            </div>
        </div>
    );
};

export default AchiveSection;