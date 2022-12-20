import React from 'react'

export default function NavBar() {
  return (
    <div className="fixed w-full italic flex-center bg-blue-primary h-14">
      <div className="items-end space-x-2 flex-center">
        <p className="text-2xl font-bold text-white">MusicBox</p>
        <p className="text-xl text-white">OnePlayer</p>
      </div>
    </div>
  )
}
