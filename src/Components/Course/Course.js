import React from 'react';
import './Course.css'

const Course = ({course}) => {
     const {name , img , rating , description}= course
    return (
        <div className='p-2 rounded backdrop-blur-[2px] backdrop-contrast-125  backdrop-opacity-10 bg-white/20 relative hover:drop-shadow-2xl'>
            <img src={img} className='w-full h-2/4' alt="" />
            <div className='mt-2'>
                <h2 className='text-2xl font-semibold text-white'>{name}</h2>
                <p className='text-lg text-white'>{description}</p>
                  <div class="rating absolute bottom-4 left-2">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                 </div>
                 <button className='absolute bottom-2 right-2.5 text-white px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full drop-shadow-lg'>
                    Enroll Now
                </button>
            </div>
        </div>
    );
};

export default Course;