import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="w-screen max-w-full flex items-center justify-center gap-3">
      <div className="flex flex-col items-start justify-center gap-2 mbMedium:gap-4">
       <Link  to="AllTransactions" spy={true} smooth={true} offset={-100} duration={500}><Button gradientMonochrome="purple">Get Started Now</Button></Link> 
        <h1 className=" text-[1.35rem] mbSmall:text-3xl laptop:text-4xl font-semibold">
          Manage Your <span className="text-[#712FFF]">Finances</span>{" "}
          Effortlessly
        </h1>
        <p className=" text-lg laptop:text-xl">
          Take control of your personal or business finances with our intuitive
          transaction manager. Track your income and expenses, visualize your
          financial data with detailed charts, and make informed decisions to
          achieve your financial goals. Simplify your financial management
          today.
        </p>
      </div>
      <img src="/hero.png" alt="" className=" hidden mbMedium:block w-[35%] laptop:w-[40%] aspect-square " />
    </div>
  );
};

export default Hero;
