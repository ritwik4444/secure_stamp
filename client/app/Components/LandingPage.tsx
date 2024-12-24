import React from "react";
import home from "./home.png";
// import home from '../public/images/home.png'

const LandingPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-3">
        <h1 className="text-6xl font-bold tracking-widest ">Welcome to </h1>
      </div>
      <br />
      <div className="flex items-center justify-center">
        <h1 className="text-6xl font-bold tracking-widest">Secure Stamp</h1>
      </div>

      <div>
        <img
          className="fixed left-0 bottom-0"
          src="https://www.namerobot.com/media/cache/namerobot/Blog/undraw_crypto_portfolio_2jy5.svg"
          width={650}
          height={450}
          alt=""
        />
      </div>

      <div>
        <img
          className="fixed right-0 bottom-0"
          src="https://zebpay.com/wp-content/uploads/2022/04/undraw_digital_currency_qpak.png"
          width={650}
          height={450}
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingPage;
