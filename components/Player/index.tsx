import React from 'react'
import Image from 'next/image'
import { FiPlusCircle } from 'react-icons/fi'
import Controller from './Controller'
import Volume from './Volume'

export default function Player() {
  return (
    <div className="fixed bottom-0 flex items-center justify-between w-full bg-black-primary h-28">
      {/* 專輯資訊 */}
      <div className="w-full space-x-4 flex-center ">
        <Image
          width={0}
          height={0}
          alt={'test'}
          sizes="100vw"
          priority={true}
          src={
            'https://images.unsplash.com/photo-1670871272628-3edc6d6c5c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
          }
          className="w-14 h-14"
        />
        <div className="text-white">
          <p className="w-64 font-bold line-clamp line-clamp-1">
            EP00 | 嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨
            嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨
            嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨 ft. xxx
          </p>
          <p className="text-xs">天天天</p>
        </div>
        <FiPlusCircle className="text-lg duration-300 ease-in-out cursor-pointer text-white/80 hover:text-white" />
      </div>
      {/* 播放器 */}
      <Controller />
      {/* 集數細項 */}
      <Volume />
    </div>
  )
}
