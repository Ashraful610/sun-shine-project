import React from 'react';
import './Header.css'
import '../../images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { Link} from "react-router-dom";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='flex items-center justify-between h-16 bg-slate-0  md:px-10 px-5 py-2 rounded-full shadow-lg '>
            {/* --------------  company logo -----------------*/}
            <div className='flex'>
                <img src="https://i.ibb.co/yQXB43V/ed-tech-logo-removebg-preview.png" className='md:w-48 w-32 sm:block hidden cursor-pointer' alt="" />
                <div className='flex h-full items-center'>
                  {/* ------------------- user photo ----------------*/}
                  <Link to='/home' className='text-2xl mx-5 font-serif text-white cursor-pointer'> Home  </Link>
                     {
                        user?.displayName && <p className='text-2xl font-serif text-white'>
                            {user.displayName}
                        </p>
                     }
                </div>
              
            </div>           
            <div className='flex h-full items-center'>
                {/* ----------------- sign in and sign out ----------------*/}
                {
                    user ? 
                    <button className='text-xl font-serif text-white cursor-pointer' 
                    onClick={() =>signOut(auth)}> Sign Out </button> : 
                     <Link to='/signUp' className='text-xl font-serif text-white cursor-pointer'>
                         Sign In
                    </Link>
                }
            </div>
        </div>
    );
};

export default Header;