import React from 'react'
import Image from 'next/image'
import { FiPlusCircle } from 'react-icons/fi'
import Controller from './Controller'

export default function Player() {
  return (
    <div className="bottom-0 fixed flex items-center justify-between bg-blue border w-full h-20">
      {/* 專輯資訊 */}
      <div className="flex-center space-x-4 w-full ">
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
          <p className="font-bold line-clamp line-clamp-1 w-64">
            EP00 | 嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨
            嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨
            嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨 ft. xxx
          </p>
          <p className="text-xs">天天天</p>
        </div>
        <FiPlusCircle className="text-white/80 cursor-pointer hover:text-white text-lg duration-300 ease-in-out" />
      </div>
      {/* 播放器 */}
      <Controller />
      {/* 集數細項 */}
      <div className="w-full border">123s</div>
    </div>
  )
}
