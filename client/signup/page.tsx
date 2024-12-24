"use client"
// import LoginNavbar from '../Components/Loginavbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import signImage from '../../public/images/signup.png'
import  {useState}  from 'react';
import { useRouter } from "next/navigation";
import {signIn,useSession} from 'next-auth/react'



export default function signup() {
    const router = useRouter()
    const [route, setRoute] = useState("")
    const handleSubmit = (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        router.push('../Login')
    }
    const session =useSession(); 
    // console.log(session);
  return (
   
    <div>
      {/* <LoginNavbar/> */}
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src={signImage} alt="Login Image" width={410} height={410} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-4xl font-bold">Create an account</h1>
        
             
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block  text-gray-700">
                Email 
              </label>
              <input
                id="email"
                type="email"
                placeholder="deniel123@gmail.com"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block  text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="................"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
              
            </div>

            
           
          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Sign Up
            </button>
          </div>
        </form>

        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or continue with</div>
        </div>
        <div className="flex items-center justify-center mt-4 gap-x-2">
          <button
          onClick={()=>signIn("google")}
            type="button"
            className="flex items-center justify-center w-1/3 p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>

        
            </div>
         
        </div>
      </div>
      </div>
  )
}