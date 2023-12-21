import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Body from './Body';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Login from './Login';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user; 
        dispatch(
          addUser({
            id: uid,
            email: email,
            name: displayName,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });

    return () => {
      //removing event listener
      unsubscribe(); 
    };
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login />
          }
        />
        <Route
          path="/main"
          element={
             <Body />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
