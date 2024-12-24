import Image from 'next/image'
import Generate from './Generate/page'
import Login from './Login/page'
// import LoginNavbar from './Components/Loginavbar'

export default function Home() {
  return (
    <main>
         {/* <LoginNavbar/> */}
        {/* <div className="flex">
            <h1 className="text-6xl font-bold tracking-widest px-10 py-10">Welcome to <br/> Secure Stamp </h1>
           
        </div>
        <br />
         <div>
            <img className="fixed left-0 bottom-0 px-8" src="https://www.namerobot.com/media/cache/namerobot/Blog/undraw_crypto_portfolio_2jy5.svg" width={650} height={450} alt="" />
         </div> */}
      <Login/>
    </main>
  )
}
