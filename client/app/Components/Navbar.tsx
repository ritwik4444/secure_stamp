import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Home from './home.png'

export default function Navbar() {
  return (
    <main>
        <div className='mx-10 my-10 flex justify-end'>
          
            <Link href="/Verify"><span className='mx-10 my-8 text-xl font-medium'>Verify Certificate</span></Link>
            <Link href="/Generate"><span className='mx-10 my-8 text-xl font-medium'>Generate Certificate</span></Link>
            <Link href="/Dashboard"><span className='mx-10 my-8 text-xl font-medium'>Dashboard</span></Link>
            <Link href="/"><span className='mx-10 my-8 text-xl font-medium'>Logout</span></Link>
        </div>
    </main>
  )
}
