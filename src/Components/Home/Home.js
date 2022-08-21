import React from 'react';
import AchiveSection from '../Achive-Section/AchiveSection';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Student from '../Student/Student';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <AchiveSection></AchiveSection>      
            <Student></Student>
        </div>
    );
};

export default Home;