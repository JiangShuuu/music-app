import React from 'react'
import NavBar from '~/components/Global/NavBar'
import Player from '~/components/Player'
import SideBar from '~/components/Global/SideBar'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <main className="relative flex flex-col min-h-screen">
        <div className="flex">
          {/* sidebar */}
          <SideBar />
          {/* content */}
          <div className="w-full h-screen">{children}</div>
        </div>
        {/* player */}
        <Player />
      </main>
    </>
  )
}
