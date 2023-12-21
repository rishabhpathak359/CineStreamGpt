import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const useAuthentication = (signIn) => {
  const signUpUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return user;
    } catch (error) {
      console.error('Error in user creation:', error);
      throw error;
    }
  };

  const signInUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return user;
    } catch (error) {
      console.error('Error in user signIn:', error);
      throw error;
    }
  };

  
  return {signInUser,signUpUser};
};

export default useAuthentication;
