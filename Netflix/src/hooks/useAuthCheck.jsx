import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const [signed, setSigned] = useState(false);
  const [dropVisible, setDropVisible] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSigned(true);
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
        navigate("/")
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const handleClick = () => {
    setDropVisible(!dropVisible);
  };

  const handleSignOut = async () => {
    console.log("clicked")
    try {
      await auth.signOut();
      dispatch(removeUser());
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return { signed, dropVisible, handleClick, handleSignOut };
};

export default useAuthCheck;
