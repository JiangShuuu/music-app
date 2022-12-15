import React from 'react';
import NavBar from '~/components/Global/NavBar';
import Player from '~/components/Player';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <main className='relative flex min-h-screen flex-col'>
        {/* nav */}
        <NavBar />
        {/* content */}
        <div className='w-full h-screen my-14'>{children}</div>
        {/* player */}
        <Player />
      </main>
    </>
  );
}
