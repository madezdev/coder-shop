import React from 'react'

export default function layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    
    <div>
        <main className=''>
            {children}
        </main>
    </div>
  )
}
