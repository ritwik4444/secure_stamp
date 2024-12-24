'use client'
import React from 'react'
import Navbar from '../Components/Navbar'
import { useState, useEffect } from 'react';
import Certificate from '../../public/Images/verified.jpeg'
import Image from 'next/image';

const handleVerify = () => {
    const [verificationStatus, setVerificationStatus] = useState('Checking'); // Default status is "Checking"

  useEffect(() => {
    const verificationTimeout = setTimeout(() => {
      setVerificationStatus('Verified'); // Change status to "Verified" after 20 seconds
    }, 2000);

    return () => clearTimeout(verificationTimeout); // Cleanup the timeout on component unmount
  }, []);

  return (
    <div>
        <Navbar/>
      {verificationStatus === 'Checking' && <p className='flex items-center justify-center text-6xl font-bold tracking-widest'>Checking your certificate...</p>}

      {verificationStatus === 'Verified' && (
        <div>
          <p className='flex items-center justify-center text-6xl font-bold tracking-widest font-color'>Certificate Verified</p>
          <div className='flex items-center justify-center'>
          <Image  
          className='py-10'
          src={Certificate}
          alt=""
          />
          </div>
        </div>
      )}
    </div>
  )
}

export default handleVerify
