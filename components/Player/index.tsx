import React from 'react'
import Image from 'next/image'
export default function Player() {
  return (
    <div className="bottom-0 fixed flex-center bg-white border w-full h-14">
      <Image
        width={0}
        height={0}
        alt={'test'}
        sizes="100vw"
        priority={true}
        src={
          'https://images.unsplash.com/photo-1670871272628-3edc6d6c5c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        }
        className="w-10 h-10"
      />
      <div className="flex-center">player</div>
    </div>
  )
}
