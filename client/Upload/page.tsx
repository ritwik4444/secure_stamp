import React from 'react'
import Navbar from '../Components/Navbar'
import InsideNavbar from '../Components/insideNavbar'

const Upload = () => {
  return (
    <div>
        <Navbar/>
        <InsideNavbar />
        <div>
          <p className='flex items-center justify-center text-6xl font-bold tracking-widest font-color'>Certificate Uploaded</p>
          <div className='flex items-center justify-center'>
          </div>
        </div>
    </div>
  )
}

export default Upload
