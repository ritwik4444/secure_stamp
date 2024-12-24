"use client"
import React from 'react'
import Navbar from '../Components/Navbar'
import ViewCredentials from '../viewCredential/page';
import { useRouter } from "next/navigation";
import {useState} from 'react'
import InsideNavbar from '../Components/insideNavbar'

export default function generateCredentials() {
    const router = useRouter()
    const [route, setRoute] = useState("")
    const handleSubmit = (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        router.push('../viewCredential')
    }
  return (
    <main>
        <Navbar />
        <InsideNavbar />

        <div className='form' >
            <h2 className='form-head'>Certificate Form</h2>
            <div className='flex flex-col'>
            <form onSubmit={handleSubmit}>
                <div className='form-input flex flex-col'>
                    <label>Title:</label>
                    <input type="text" placeholder='Enter Title' required/>
                </div>
                <div className="form-input flex flex-col">
                    <label>Category:</label>
                    <input type="text" placeholder='Enter Category' required/>
                </div>
                <div className="form-input flex flex-col">
                    <label>Name:</label>
                    <input type="text" placeholder='Enter Name' required/>
                </div>
                <div className="form-input flex flex-col">
                    <label>Date of Certificate Generation:</label>
                    <input type="date" required/>
                </div>
                <button className='btn-publish flex items-center justify-center'>Publish</button>
            </form>
            </div>
        </div>
    </main>
  )
}
