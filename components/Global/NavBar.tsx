import React from 'react';

export default function NavBar() {
  return (
    <div className='flex-center fixed w-full bg-blue-primary italic h-14'>
      <div className='flex-center items-end space-x-2'>
        <p className='font-bold text-white text-2xl'>MusicBox</p>
        <p className='text-white text-xl'>OnePlayer</p>
      </div>
    </div>
  );
}
