"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import { SiWalletconnect } from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Web3 from 'web3'

const Header = () => {
  // define all state here
    const [isOpen, setIsOpen] = useState(false);
//    const [error, setError] = useState("");
    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
    // to handle the event for connect wallet
    let web3
    const connectWalletHandler = async() => {
      // to check if metamask is installed
      if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
       try {
        await window.ethereum.request({ method: 'eth_requestAccounts'})
        web3 = new Web3(window.ethereum)
       } catch (error) {
//        setError(error.message)
       } 
      }else {
        //incase metamask is not installed
        console.log('please install metamask')
      }
    }

  return (
    <div className='fixed w-full px-[2rem] h-[4rem] flex items-center justify-between border-b  bg-black shadow-md shadow-[#ffb07c9e]'>
         {/* Hamburger Menu for mobile devices*/}
         <button 
            className='md:hidden text-white transition duration-500 ease-in-out' 
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            {isOpen ? <AiOutlineClose fontSize={25} /> : <AiOutlineMenu fontSize={25} />}
        </button>
        <div className="logo-name flex text-white cursor-pointer space-x-4">
        <h1 className='text-4xl'>Frysk</h1> 

         <div className='md:flex text-white py-1 px-2 rounded-md space-x-8 hidden'>
                <Link className="transition duration-500 ease-in-out hover:bg-[#161c2c] py-1 px-2 hover:text-white rounded-md" href="/">Home</Link>
                <Link className="transition duration-500 ease-in-out hover:bg-[#161c2c] py-1 px-2 hover:text-white rounded-md" href="/vault">Vault</Link>
                <Link className="transition duration-500 ease-in-out hover:bg-[#161c2c] py-1 px-2 hover:text-white rounded-md" href="/bridge">Bridge</Link>
            </div>

        </div>        
        {/* end of div 1 and start of div 2 */}
        <div className='app-links hidden md:flex justify-between  items-center text-lg'>
           
           <div className='flex items-center text-lg space-x-4'>
            <Link className='wiggly border text-white py-1.5 px-5 transition duration-500 ease-in-out hover:text-blue-600' href="/test">Stake</Link>
            <div className='flex bg-white text-[#1c2337] py-1 px-1.5 rounded-md space-x-2 '>
                <button onClick={connectWalletHandler} className="wiggly transition duration-500 ease-in-out hover:bg-black  hover:text-white rounded-md py-0.5 px-2.5 flex items-center space-x-2" ><p>Connect</p> <SiWalletconnect /> </button>
            </div>
           </div>
        </div>
        {/* end of div 2 and start of div 3 */}
       
         {/* Mobile Menu */}
            {isOpen && (
                <div className='absolute top-[4rem] left-0 w-full bg-[#1c2337] text-white md:hidden flex flex-col space-y-4 p-4'>
                <Link className="transition duration-500 ease-in-out hover:bg-[#2c354d] rounded-xl py-1 px-2.5" href="/" onClick={toggleMenu}>Home</Link>
                <Link className="transition duration-500 ease-in-out hover:bg-[#2c354d] rounded-xl py-1 px-2.5" href="/vault" onClick={toggleMenu}>Vault</Link>
                <Link className="transition duration-500 ease-in-out hover:bg-[#2c354d] rounded-xl py-1 px-2.5" href="/bridge" onClick={toggleMenu}>Bridge</Link>
                </div>
            )}
    </div>
  )
}

export default Header