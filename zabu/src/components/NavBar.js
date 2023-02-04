import React from "react";
import Logo from "../images/Logo.png";

const NavBar = () => {
  return (
    
      <div className="flex justify-between text-white bg-gradient-to-bl from-gray-600 via-black to-black h-[100px] ">
        <div className=" h-full flex justify-center ml-4  ">
          <a href="a">
            <img
              src={Logo}
              alt="hello"
              className="flec justify-center h-[175px] w-[175px] pb-[60px]"
            />
          </a>
        </div>

        <div className="text-center my-auto mr-12">
          <ul className=" flex justify-around gap-8 text-center text-[20px] ">
            <a href="a">
            
              <li>Home</li>
            </a>
            <a href="a">
            
              <li>Conterbuite</li>
            </a>
            <a href="a">
            
              <li>Contact Us</li>
            </a>
            <a href="a">
            
              <li>About</li>
            </a>
          </ul>
        </div>
      </div>

  );
};

export default NavBar;
