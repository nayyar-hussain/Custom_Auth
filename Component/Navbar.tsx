"use client"

import { logoutUser } from '@/app/server.action/Logout'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='w-full p-2 bg-gray-300'>
        <div className='flex justify-between'>
            <div><h1 className="text-2xl font-bold">Logo</h1></div>
       
        <div className='space-x-2'>
          <Link href={'/login'}>Login</Link>
          <Link href={'/dashboard'}>Dashboard</Link>
        </div>
        <div>
          <Button onClick={logoutUser}>LOGOUT</Button>
        </div>
         </div>
    </nav>
  )
}

export default Navbar