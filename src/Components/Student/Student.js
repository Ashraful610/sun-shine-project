import React from 'react';

const Student = () => {
    return (
        <div className="md:h-screen py-4">
                <h2 className='md:text-[40px] text-[30px] text-white text-center p-5 font-serif'>
                    What <span className='text-orange-500'> Students </span>  
                     Say About <span className='text-orange-500'> Course </span>  
                </h2>
                <div className="grid md:grid-cols-3 md:gap-5 gap-3 h-4/5">
                    {/* ------------ first review -------------*/}
                    <div className="backdrop-blur-sm bg-white/30 p-5 relative md:h-3/4">
                        <div className='flex h-1/4 items-center py-5'>
                            <img src="https://i.ibb.co/h1v6q1M/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg"
                            className='ring ring-4 ring-offset-1 rounded-full w-[80px]' alt="" />
                            {/* ------------ name -------------------- */}
                            <div className='ml-4'>
                                <h2 className='text-xl font-semibold text-white font-serif'>
                                    Shahrukh Shan
                                </h2>
                                 <h2 className='text-xl font-semibold text-white font-serif'>
                                    Bollywood Superstar
                                </h2>
                            </div>                           
                        </div>
                        {/* ------------------ paragraph --------------------------------*/}
                        <p className='text-base text-white my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quo alias, illo maiores nihil dolorum facilis voluptatem nam quibusdam pariatur!</p>
                        {/* ----------------- rating ------8-------------*/}
                        <div class="rating absolute bottom-12 left-32 my-3">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                      </div>
                    </div>
                    {/* ------------------ second review ------------------ */}
                    <div className="backdrop-blur-sm bg-white/30 p-5 relative md:h-3/4">
                        <div className='flex h-1/4 items-center py-5'>
                            <img src="https://i.ibb.co/f1KF34K/salman-khan-1.jpg"
                            className='ring ring-4 ring-offset-1 rounded-full w-[80px] h-[80px]' alt="" />
                            <div className='ml-4'>
                                <h2 className='text-xl font-semibold text-white font-serif'>
                                   Salman Shan
                                </h2>
                                 <h2 className='text-xl font-semibold text-white font-serif'>
                                    Bollywood Superstar
                                </h2>
                            </div>                           
                        </div>
                        <p className='text-base text-white my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quo alias, illo maiores nihil dolorum facilis voluptatem nam quibusdam pariatur!</p>
                        <div class="rating absolute bottom-12 left-32 my-3">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                      </div>
                    </div>
                    {/* ------------------ third review ------------------ */}
                    <div className="backdrop-blur-sm bg-white/30 p-5 relative md:h-3/4">
                        <div className='flex h-1/4 items-center py-5'>
                            <img src="https://i.ibb.co/RjYXdHH/images-1.jpg"
                            className='ring ring-4 ring-offset-1 rounded-full w-[80px] h-[80px]' alt="" />
                            <div className='ml-4'>
                                <h2 className='text-xl font-semibold text-white font-serif'>
                                    Amir Shan
                                </h2>
                                 <h2 className='text-xl font-semibold text-white font-serif'>
                                    Bollywood Superstar
                                </h2>
                            </div>                           
                        </div>
                        <p className='text-base text-white my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quo alias, illo maiores nihil dolorum facilis voluptatem nam quibusdam pariatur!</p>
                        <div class="rating absolute bottom-12 left-32 my-3">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                      </div>
                    </div>
                </div> 
        </div>
    );
};

export default Student;