import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <main className='relative flex min-h-screen '>
        {/* nav */}
        {/* content */}
        <div className='w-full'>{children}</div>
      </main>
    </>
  );
}
