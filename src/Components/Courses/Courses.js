import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses , setCourses] = useState([])

    useEffect( () => {
        fetch('allCourses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="md:py-10 md:h-max lg:h-screen">
              <h2 className="text-4xl text-white text-center font-semibold font-serif">
                Our Popular <span className='text-orange-500'>  Courses </span> 
             </h2>
              {/* ------------------------ all courses --------------------*/}
             <div className='grid md:grid-cols-4 gap-5  py-10'>
                      {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                       }
             </div>
        </div>
    );
};

export default Courses;