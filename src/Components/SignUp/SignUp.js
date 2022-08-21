import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [login , setLogin] = useState(false);
    const [name , setName] = useState({name:'' ,error:''});
    const [email, setEmail] = useState({email:'' ,error:''});
    const [password, setPassword] = useState({password:'' , error:''});
    const [newError, setNewError] = useState('');

    // ---------------- create user email and password  hook----------------
    const [
      createUserWithEmailAndPassword,
      createUser,
      createLoading,
      createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
      signInWithEmailAndPassword,
      signUser , 
      signError 
    ] = useSignInWithEmailAndPassword(auth);
  
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [user, loading, error] = useAuthState(auth);

      const handleToogle = (event) => {
        event.preventDefault();
        setLogin(true);
      }
      const handleSignUpToogle = (event) => {
        event.preventDefault();
        setLogin(false);
      }

      const handleName = (event) => {
       const name = event.target.value;
       if(name !== ''){
        setName({name:name , error:''});
       }
       else{
        setName({name:'' , error:'name is required'});
       }
      }

      const handleEmail = (event) => {
       const email = event.target.value;
       if(email !== ''){
        setEmail({email:email , error:''});
       }
       else{
        setEmail({email:'' , error:'email is required'});
       }
      }

      const handlePassword = (event) => {
       const password = event.target.value;
       if(password !== ''){
        setPassword({password:password , error:''});
       }
       else{
        setPassword({password:'' , error:'password is required'});
       }
      }

      const handleSubmit = async  event => {
        event.preventDefault();
        if( email.email !== '' && password.password !== '' && name.name !== '') {
         await  createUserWithEmailAndPassword( email.email , password.password)
          await updateProfile({ displayName:name.name })         
        }
    }

    const handleSignIn = event => {
      event?.preventDefault();
      if( email.email !== '' && password.password !== '') {
        signInWithEmailAndPassword(email?.email, password?.password)      
       }
    }

    if (createError || updatingError || googleError || error || signError) {
      setNewError(createError?.message || updatingError?.message || googleError?.message ||error?.message || signError?.message)
    }
    if(loading){
      return <Loading></Loading>
    }
  
    return (
        <div className="h-fit md:w-2/4 mx-auto p-5 ">
            <div className="backdrop-blur-sm bg-white/30 h-fit">
                <h2 className='text-3xl text-white text-center font-bold p-3'>
                   { login ? 'Sign IN':'Sign Up' }
                </h2>
                <form className='p-5' onSubmit={ handleSubmit}>
                    {/* ----------------- user name ----------------*/}
                    {
                        !login && <div>
                          <label htmlFor="name" className='text-white text-xl'>Name :</label> <br />
                          <input type="text" name="name" placeholder='enter name' 
                           className="w-3/4 px-5 py-2 my-3 rounded-full" onBlur={handleName}  id="" /> <br />
                        </div>
                    }                   
                    {/* ---------- name error --------------------*/}
                    {
                        name.error && <p className="text-lg text-red-500">{name.error}</p>
                    }
                    {/* ----------------- user email ----------------*/}
                    <label htmlFor="email" className='text-white text-xl'>Email :</label> <br />
                    <input type="email" name="email" placeholder='enter email' 
                    className="w-3/4 px-5 py-2 my-3 rounded-full" id="" onBlur={handleEmail} /><br />
                    {/* ---------- email error --------------------*/}
                    {
                        email.error && <p className="text-lg text-red-500">{email.error}</p>
                    }
                    {/* ----------------- password ------------------- */}
                    <label htmlFor="password" className='text-white text-xl'>Password:</label> <br />
                    <input type="password" name="password" placeholder='enter password' 
                    className="w-3/4 px-5 py-2 my-3 rounded-full" id="" onBlur={handlePassword}/><br />
                    {/* ---------- password error --------------------*/}
                    {
                        password.error && <p className="text-lg text-red-500">{password.error}</p>
                    }
                    {/* ------------ sign up and sign in button -------------- */}
                    {
                        login ? <button onClick={()=> handleSignIn()} className='bg-gradient-to-r from-cyan-500 to-blue-500 border-0 text-white text-2xl px-10 py-2 rounded-full my-2 font-semibold'>
                        Sign In
                      </button>:
                      <button type="submit" className='bg-gradient-to-r from-cyan-500 to-blue-500 border-0 text-white text-2xl px-10 py-2 rounded-full my-2 font-semibold'>
                        Sign Up
                     </button>
                    }
                    {
                      newError && <p className="text-lg text-red-500">{newError}</p>
                    }
                    {/* ---------- handle sign up and sign in toogle ------------ */}
                    {
                        login ?  <h2 className='text-xl text-white text-center'>I have a no account ? Please <a href="" className='text-blue-700' 
                        onClick={handleSignUpToogle}>Sign UP</a>
                         </h2> :
                        <h2 className='text-xl text-white text-center'>Already have a account ? Please <a href="" className='text-blue-700' 
                        onClick={handleToogle}>SignIn</a>
                         </h2>
                    }
                     <div class="divider">OR</div>
                    <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl w-3/4 mx-10 my-5 shadow-md rounded-full border-0' onClick={()=>signInWithGoogle() }>Google</button>
               </form>
            </div>
        </div>
    );
};
export default SignUp;