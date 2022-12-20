import React from 'react'
import { IoHomeSharp } from 'react-icons/io5'
import { FaSearch, FaHeart } from 'react-icons/fa'
import {
  BsMusicNoteList,
  BsFillPlusSquareFill,
  BsFillBookmarkFill,
} from 'react-icons/bs'

export default function SideBar() {
  const active = `justify-start space-x-4 text-white flex-center cursor-pointer`
  const normal = `justify-start space-x-4 text-white opacity-60 flex-center hover:opacity-100 btn-ani cursor-pointer`

  return (
    <div className="w-[300px] bg-black">
      <div className="py-5 mx-5 space-y-8 border-b border-b-white/50">
        <div className="space-y-4">
          <div className={true ? active : normal}>
            <IoHomeSharp className="w-5 h-5" />
            <p className="text-sm">首頁</p>
          </div>
          <div className={false ? active : normal}>
            <FaSearch className="w-5 h-5" />
            <p className="text-sm">搜尋</p>
          </div>
          <div className={false ? active : normal}>
            <BsMusicNoteList className="w-5 h-5" />
            <p className="text-sm">你的音樂庫</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className={true ? active : normal}>
            <BsFillPlusSquareFill className="w-5 h-5" />
            <p className="text-sm">建立播放清單</p>
          </div>
          <div className={false ? active : normal}>
            <FaHeart className="w-5 h-5" />
            <p className="text-sm">已按讚的歌曲</p>
          </div>
          <div className={false ? active : normal}>
            <BsFillBookmarkFill className="w-5 h-5" />
            <p className="text-sm">你的單集</p>
          </div>
        </div>
      </div>
      <div className="py-5 mx-5 space-y-3">
        <div className={true ? active : normal}>
          <p className="text-sm">En</p>
        </div>
        <div className={false ? active : normal}>
          <p className="text-sm">Chinese</p>
        </div>
        <div className={false ? active : normal}>
          <p className="text-sm">電台收藏</p>
        </div>
        <div className={false ? active : normal}>
          <p className="text-sm">台灣通勤第一品牌</p>
        </div>
        <div className={false ? active : normal}>
          <p className="text-sm">熱門歌曲</p>
        </div>
      </div>
    </div>
  )
}
