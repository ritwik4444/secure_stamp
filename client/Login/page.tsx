"use client"
// import LoginNavbar from '../Components/Loginavbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import login from  '../../public/images/login.png'
import  {useState}  from 'react';
import { useRouter } from "next/navigation";
import {signIn,useSession} from 'next-auth/react'
 
export default function Login() {
    const router = useRouter();
    const [route, setRoute] = useState("")
    const handleSubmit = (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        router.push('../Dashboard')
    }
    const session =useSession(); 
    console.log(session)
   
  return ( 
    <div>
    {/* <LoginNavbar/> */}
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src={login} alt="Login Image" width={450} height={450} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-5xl font-bold">Login</h1>
        
             <p className="mt-4 text-sm text-center text-gray-700"/>
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
             Sign up
          </Link>
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
                type= 'password'
                 
                  
                  placeholder="password"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
          
            </div>

            
           
          <div className="mt-2">
            <div  className="flex" >
            <div className="flex-1 ">
             <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-black-100 border-black-300 focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-black-800 focus:ring-2 dark:bg-black-700 dark:border-black-600"/>
             <label className="ml-2 text-sm font-medium text-black-900 dark:text-black-300">Remember me</label>
              
            
             </div>  
             <Link
            href="/forget"
            className="text-xs flex-2 text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>
            

             
            
            </div>
         
            <button className="w-full mt-1 px-4 py-2 tracking-wide  text-white transition-colors duration-200 transform bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Sign In
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
