import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthCheck from '../hooks/useAuthCheck';

const Header = () => {
  const { signed, dropVisible, handleClick, handleSignOut } = useAuthCheck();
  const navigate=useNavigate();
   if(!signed){
    navigate("/")
   }
  return (
    <div>
      <header className='w-full absolute bg-gradient-to-b from-black z-20 flex justify-between px-4'>
        <img
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='netflix-logo'
          className='w-1/6 py-5 mx-20 '
        />
        {signed && (
          <div className="flex  flex-col">
            <img
              src="https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
              alt='user-logo'
              className='w-8 h-10 m-5 cursor-pointer'
              onClick={handleClick}
            />
            {dropVisible && (
              <div className="relative inline-block">
                <div className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-gray-800 text-white rounded-md shadow-xl">
                  <a href="#" className="block px-4 py-3 hover:bg-gray-700" onClick={() => alert("No data available right now")}>Your profile</a>
                  <Link to="/moviegpt" className="block px-4 py-3 hover:bg-gray-700">Movie suggestions</Link>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-700" onClick={() => alert("No data available right now")}>Settings</a>
                  <a href="#" onClick={handleSignOut} className="block px-4 py-3 hover:bg-gray-700">Sign Out</a>
                </div>
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
