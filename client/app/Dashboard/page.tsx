import React from 'react'
import Navbar from '../Components/Navbar'
import LandingPage from '../Components/LandingPage'

export default function Dashboard() {
  return (
    <div>
      <Navbar/>
      <div className=" flex bg-sky-200 w-full">
        <a href="http://">
          <div className="mx-10 my-8 font-medium text-lg text-sky-900">
            Certificate
          </div>
        </a>
        <a href="http://">
          <img
            className="mx-10 my-8 w-6"
            src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
            alt="home"
          />
        </a>
      </div>
      <LandingPage/>
    </div>
  )
}
