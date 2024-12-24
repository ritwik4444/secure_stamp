"use client"
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import InsideNavbar from '../Components/insideNavbar'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import verifyImage from '../../public/images/upload.jpeg';
import UploadBlock from '../../public/images/UploadBlock.png';

export default function Schema() {
  const router = useRouter()
  const [route, setRoute] = useState("")
  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault()
    router.push('../Upload')
  }
  return (
    <div>
      <Navbar />
      <InsideNavbar />
      <div className="flex items-center justify-center">
        <h1 className="text-6xl font-bold tracking-widest">Upload Certificate</h1>
      </div>

      <div>
        <Image
          width={500}
          height={500}
          alt="Verify"
          className='fixed left-10 bottom-0'
          src={verifyImage}>
        </Image>
      </div>

      <div className='fixed right-20 bottom-10 '>
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <Image
            alt="Upload"
            src={UploadBlock}>
          </Image>
        </label>

        <div className='flex items-center justify-center' >
          <button onClick={handleSubmit} className=' border-sky-800 bg-sky-800 text-gray-50 rounded-lg w-60 py-2 font-bold'>Upload Certificate</button>
        </div>
      </div>
    </div>
  )
}
