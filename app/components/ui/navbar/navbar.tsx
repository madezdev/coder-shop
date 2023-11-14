import React from 'react'
import Navlinks from './nav-links'

export default function Navbar() {
  return (
    <header className='flex items-center justify-center h-[5rem]'>
      <nav className='flex items-center justify-center '>
        <Navlinks />
      </nav>
    </header>
  )
}
