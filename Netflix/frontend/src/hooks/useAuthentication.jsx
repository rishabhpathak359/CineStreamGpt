import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import {toast} from "react-hot-toast"
const useAuthentication = (signIn) => {
  const [errorMessage,seterrorMessage]=useState("");
  const signUpUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return user;
    } catch (error) {
      toast.error(error.message.split(":")[1])
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
      toast.error(error.message)
      console.error('Error in user signIn:', error);
      throw error;
    }
  };

  
  return {signInUser,signUpUser,errorMessage};
};

export default useAuthentication;
