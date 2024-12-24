import Link from 'next/link'
import React from 'react'

export default function insideNavbar() {
  return (
    <main>
      <div className='mx-10 my-20 pt-5 pb-5 flex justify-center inside-box'>
        <Link href="/Generate"><span className='mx-10 my-10 text-xl font-medium'>Generate Credentials</span></Link>
        <Link href="/Schema"><span className='mx-10 my-10 text-xl font-medium'>Upload Certificate</span></Link>
        <Link href="/Template"><span className='mx-10 my-10 text-xl font-medium'>View Template</span></Link>
      </div>
    </main>
  )
}
