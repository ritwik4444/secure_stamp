import React from 'react'
import CrudBar from '../Components/CrudBar'
import InsideNavbar from '../Components/insideNavbar'
import Navbar from '../Components/Navbar'

const Template = () => {
  return (
    <div>
      <Navbar/>
      <InsideNavbar />
      <CrudBar/>
    </div>
  )
}

export default Template
