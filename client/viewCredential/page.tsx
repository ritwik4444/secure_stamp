import React from "react";
import Image from "next/image";
import flat from "./Flat-Journalist.png";
import Navbar from '../Components/Navbar'
import InsideNavbar from '../Components/insideNavbar'

export default function viewCredentials() {
  return (
    <main>
      <Navbar/>
      <InsideNavbar />
      <div className="congo">
        <div className="congo-wrap flex-1">
            Congratulations, Person! <br />
            You have won a certificate.
        </div>
        <div className="congo-image flex-2">
            <Image src={flat} alt="flat" width={202} height={140}></Image>
        </div>
      </div>
    </main>
  );
}
