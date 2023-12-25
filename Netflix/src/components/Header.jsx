import { onAuthStateChanged } from 'firebase/auth';
import React, { useState,useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const[signed,setsigned]=useState(false)
    const handleSignOut = async () => {
        try {
          await auth.signOut(); 
          dispatch(removeUser()); 
        } catch (error) {
          console.error('Error signing out:', error);
        }
      };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setsigned(true);
        const { uid, email, displayName } = user; 
        dispatch(
          addUser({
            id: uid,
            email: email,
            name: displayName,
          })
        );
      navigate("/main")
        
      } 
      else {
        dispatch(removeUser());
        navigate("/")
       }
    });

    return () => {
      //removing event listener
      unsubscribe(); 
    };
  }, []);
  return (
    <div>
    <header className='w-full absolute bg-gradient-to-b from-black z-20 flex justify-between'>
    <img
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='netflix-logo'
      className='w-1/6 py-5 mx-20 px-4'
    />
   {signed &&
   <>
   <img
    src="https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
    alt='user-logo'
    className='w-8 h-10 m-5'
    />
    <button 
    onClick={handleSignOut}>Sign Out
    </button>
    </> 
    }
  </header></div>
  )
}

export default Header