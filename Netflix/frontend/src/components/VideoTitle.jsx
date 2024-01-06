import React, { useEffect } from 'react';
import PlaySvg from '../assets/play.svg';
import InfoSvg from '../assets/info.svg';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='h-screen aspect-video w-screen px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='pt-48 text-5xl font-semibold w-1/2'>{title}</h1>
      <p className='w-1/4 pt-4 text-lg'>{overview}</p>
      <div className='my-4 space-x-4 text-xl flex items-center'>
        <button className='flex items-center bg-white text-black py-2 px-6'>
          <img src={PlaySvg} className='w-6 h-6 mr-2' /> Play
        </button>
        <div className='flex items-center'>
          <button className='text-white bg-[#4f4f50] py-2 px-6 flex items-center'>
          <img src={InfoSvg} className='w-5 h-5 mr-2 fill-white' />  More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
