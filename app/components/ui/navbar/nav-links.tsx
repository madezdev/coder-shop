import Link from 'next/link';
import React from 'react'

export default function Navlinks() {

  const links = [
    {
      name:'Men',
      href:'/category/mens',
    },
    {
      name:'Women',
      href:'/category/womens',
    },
    {
      name:'Kids',
      href:'/category/kids',
    }
   ]
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex flex-row items-center justify-center py-2 px-6 hover:bg-gray-100 rounded-md "
          >
            <p className="font-medium">{link.name}</p>
          </Link>
        );
      })}
    </>
  )
}
