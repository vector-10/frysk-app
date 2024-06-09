"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { MdNotificationsActive } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  // define all state here
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='fixed w-full px-[2rem] h-[4rem] flex items-center justify-between shadow-md bg-[#1c2337]'>
         {/* Hamburger Menu for mobile devices*/}
         <button 
            className='md:hidden text-white transition duration-500 ease-in-out' 
           // onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            {isOpen ? <AiOutlineClose fontSize={25} /> : <AiOutlineMenu fontSize={25} />}
        </button>
        <div className="logo-name wiggly text-4xl text-white hover:scale-75 hover:rotate-12 cursor-pointer transition duration-500 ease-in-out">
         Frysk
        </div>        
        {/* end of div 1 and start of div 2 */}
        <div className='app-links hidden md:flex justify-between w-[36rem] items-center text-lg'>
            <div className='flex bg-white text-[#1c2337] py-0.5 px-1.5 rounded-2xl space-x-2'>
                <Link className="wiggly transition duration-500 ease-in-out hover:bg-[#1c2337] hover:text-white rounded-xl py-1 px-2.5" href="/dashboard">Home</Link>
                <Link className="wiggly transition duration-500 ease-in-out hover:bg-[#1c2337] hover:text-white rounded-xl py-1 px-2.5" href="/quiz">Vault</Link>
                <Link className="wiggly transition duration-500 ease-in-out hover:bg-[#1c2337] hover:text-white rounded-xl py-1 px-2.5" href="/pdf">Bridge</Link>
                <Link className="wiggly transition duration-500 ease-in-out hover:bg-[#1c2337] hover:text-white rounded-xl py-1 px-2.5" href="/bot">Bot</Link>
            </div>

           <div className='flex items-center text-lg'>
            <Link className='wiggly border mx-4 text-white py-2 px-5 transition duration-500 ease-in-out hover:text-blue-600' href="/test">Stake</Link>
            <div className='flex bg-white text-[#1c2337] py-0.5 px-1.5 rounded-2xl space-x-2 '>
                <Link className="wiggly transition duration-500 ease-in-out hover:bg-[#1c2337] hover:text-white rounded-xl py-0.5 px-2.5 " href="/steeze-board">Connect Wallet</Link>
            </div>
           </div>
        </div>
        {/* end of div 2 and start of div 3 */}
       
         {/* Mobile Menu */}
            {isOpen && (
                <div className='absolute top-[4rem] left-0 w-full bg-[#1c2337] text-white md:hidden flex flex-col space-y-4 p-4'>
                <Link className="transition duration-500 ease-in-out hover:bg-[#2c354d] rounded-xl py-1 px-2.5" href="/" onClick={toggleMenu}>Home</Link>
                <Link className="transition duration-500 ease-in-out hover:bg-[#2c354d] rounded-xl py-1 px-2.5" href="/quiz" onClick={toggleMenu}>Quiz</Link>
                <Link className="transition duration-500 ease-in-out hover:bg-[#2c354d] rounded-xl py-1 px-2.5" href="/pdf" onClick={toggleMenu}>PdFJam</Link>
                <Link className="transition duration-500 ease-in-out hover:bg-[#2c354d] rounded-xl py-1 px-2.5" href="/bot" onClick={toggleMenu}>Bot</Link>
                <Link className="transition duration-500 ease-in-out hover:bg-[#2c354d] rounded-xl py-1 px-2.5" href="/test" onClick={toggleMenu}>Test</Link>
                <Link className="transition duration-500 ease-in-out hover:bg-[#2c354d] rounded-xl py-1 px-2.5" href="/steeze-boards" onClick={toggleMenu}>Steeze-Boards</Link>
                </div>
            )}
    </div>
  )
}

export default Header