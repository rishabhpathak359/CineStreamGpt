import React, { useEffect, useRef, useState } from 'react';
import { useValidation } from '../hooks/useValidation';
import useAuthentication from '../hooks/useAuthentication'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import {toast} from "react-hot-toast"
import useAuthCheck from '../hooks/useAuthCheck';

const Login = () => {
    const{signed}=useAuthCheck();
    const[signIn,setsignIn]=useState(true);
    // const [errorMessage,seterrorMessage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    const navigate=useNavigate();
    const { signUpUser, signInUser,errorMessage } = useAuthentication(signIn);
    useEffect(() => {
      if (signed) {
        navigate('/main');
      }
    }, [signed, navigate]);

    const handleValidation=async ()=>{
        const validation=useValidation(email?.current?.value,password?.current?.value);
        if(validation) {
          toast.error(validation);
          return;
        };
        try {
          if(errorMessage){
            console.log("error" , errorMessage)
          }
          if (!signIn) {
            const user = await signUpUser(email?.current?.value, password?.current?.value);
            if(user){
              toast.success("Registered Successfully")
            }
            console.log('User signed up:', user);
          } else {
            const user = await signInUser(email?.current?.value, password?.current?.value);
            if(user){
              toast.success("Login Successfull")
            }
            console.log('User signed in:', user);
          }
        } catch (error) {
          // toast.error(error)
          console.error('Error during authentication:', error);
        }


    }
    const handleFormType=()=>{
        email.current.value=null;
        password.current.value=null;
        setsignIn(!signIn);
    }
  return (
    <div>
     <Header/>
      <img
        src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt="background"
        className='absolute h-screen md:h-fit'
      />
     <form
      className='absolute bg-black/95 md:w-3/12 w-screen md:p-8 rounded-md text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      style={{ maxWidth: '400px', width: '80%', padding: '20px', margin: 'auto' }}
      onSubmit={(e)=>e.preventDefault()}
      >
  <p className='text-3xl font-semibold mb-8 text-center md:mr-52'>{signIn?"Sign In":"Sign Up"}</p>
  {!signIn && 
   <input
   type='text'
   placeholder='Enter your full name'
   className='w-full py-2 px-4 mb-4 rounded bg-[#333] text-white text-lg my-4'
 />}
  <input
    type='text'
    ref={email}
    placeholder='Email-address'
    className='w-full py-2 px-4 mb-4 rounded bg-[#333] text-white text-lg mt-4'
  />
  <input
    type='password'
    ref={password}
    placeholder='Password'
    className='w-full py-2 px-4 mb-4 rounded bg-[#333] text-white text-lg mt-4'
  />
  <p className='text-sm text-red-600'>{errorMessage}</p>
  <button className='w-full py-2 bg-[#e50914] mb-4 text-white text-lg rounded mt-12'
  onClick={()=>handleValidation()}
  >{signIn?'Sign In':'Sign Up'}</button>
  <p className='text-gray-400 text-lg text-center'>{signIn?"New to Netflix?":"Alredy a user?"} 
  <span className='text-white cursor-pointer'
  onClick={()=>handleFormType()}
  >
     {signIn?"Sign Up now.":"Sign In now."}</span></p>
</form>

    </div>
  );
};

export default Login;
