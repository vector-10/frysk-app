"use client"
import React from 'react';
import Header from "./components/Header"
import Web3 from 'web3'
import { SiWalletconnect } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaVault } from "react-icons/fa6";
import { FaBridgeCircleCheck } from "react-icons/fa6";
import { IoPieChartSharp } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";

export default function Home() {
      // to handle the event for connect wallet
      let web3
      const connectWalletHandler = () => {
        // to check if metamask is installed
        if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
          window.ethereum.request({ method: 'eth_requestAccounts'})
          web3 = new Web3(window.ethereum)
        }else {
          //incase metamask is not installed
          console.log('please install metamask')
        }
      }

  return (
    <main className='bg-[#0b1120]'>
      <Header />
    <div className="overflow-y-auto min-h-screen flex flex-col ">      
      <section className="hero-section flex flex-col text-center justify-center mt-[16rem]">
        <h1 className=" text-4xl md:text-5xl text-white font-bold "><span className='text-[#FFB07C]'>Stake</span> and Earn Yields on <span className='text-[#FFB07C]'>Frysk</span> <br/> built on the L2 frax chain.</h1>
        <p className="text-gray-300 mt-4 text-xs md:text-lg">Frysk enables you to Stake and Earn Maximun Yields <br /> through the Frax Protocol on the L2 Frax Blockchain in a seamless, pain free process.</p>        
      </section>      
      <div className="action-buttons flex justify-center mt-10 text-lg space-x-4 wiggly">
        <button onClick={connectWalletHandler} className="text-white border rounded-sm py-2 px-2 cursor-pointer transition duration-300 ease-in-out hover:text-blue-400 flex items-center space-x-2">
        <p>Connect Wallet</p> <SiWalletconnect />  
        </button>           
        <button className="text-[#0b1120] font-bold bg-[#FFB07C] rounded-sm py-2 px-3 cursor-pointer transition duration-300 ease-in-out hover:text-white">
        Explore Markets
        </button>        
      </div>
      <div class="grid grid-cols-3 divide-x text-lg mt-[10rem] wiggly text-center border mx-[4rem] md:mx-[14rem] h-[10rem] bg-black text-white rounded-lg shadow-lg shadow-[#ffb07c9e]">
          <div className='flex flex-col justify-center items-center rounded-sm cursor-pointer '>           
           <p className='text-xs'>Trading Volume</p>
           <p className='font-bold wiggly md:text-4xl text-lg'>3,000,000</p>
           <p className='text-xs'>In the Last 24 Hours</p>
          </div>
          <div className='flex flex-col justify-center items-center rounded-sm  cursor-pointer'>           
          <p className='text-xs'>Staking Volume</p>
           <p className='font-bold wiggly md:text-4xl text-lg'>5,000,000</p>
           <p className=' text-xs'>Currently Open</p>
          </div>
          <div className='flex flex-col justify-center items-center rounded-sm  cursor-pointer'>          
          <p className=' text-xs'>Open Liquidity</p>
           <p className='font-bold wiggly md:text-4xl text-lg'>20</p>
           <p className=' text-xs'>In the Last 24 Hours</p>
          </div>          
        </div>

        <section className='flex flex-col justify-center items-center text-white mt-[10rem] mb-[10rem] font-bold text-center'>
          <h1 className='text-5xl'> <span className='text-[#FFB07C]'>Surplus</span> Yields <br/> <span className='text-[#FFB07C]'>Maximum</span> Stakes!</h1>
          <p className='wiggly mt-[2rem]'> Featuring a variety of assets from across EVM and Cosmos, with new assets added wigglyly</p>
        </section>
    </div>

    <div className='flex md:flex-row flex-col text-white justify-center items-center space-x-28 mb-[10rem]'>
      <div className='grid grid-cols-2 grid-rows-2 gap-[2rem] font-bold wiggly text-3xl text-center '>
        <p className='border md:p-[6rem] p-[4rem] bg-black rounded-lg shadow-lg shadow-[#ffb07c9e]'><FaVault /></p>
        <p className='border md:p-[6rem] p-[4rem] bg-black rounded-lg shadow-lg shadow-[#ffb07c9e]'><FaBridgeCircleCheck /></p>
        <p className='border md:p-[6rem] p-[4rem] bg-black rounded-lg shadow-lg shadow-[#ffb07c9e]'><IoPieChartSharp /></p>
        <p className='border md:p-[6rem] p-[4rem] bg-black rounded-lg shadow-lg shadow-[#ffb07c9e]'><GiWallet /> </p>        
      </div>
      <div className='text flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold mb-4 mt-16 '>Lock up Your <br /> <span className='text-[#FFB07C]'>Assets in Vaults</span> </h1>
        <p className='wiggly text-sm'>Obtain Maximum returns per Hour, Increase earning potential <br /> and ensured stability with our stable pairs</p>
      </div>
    </div>

    <footer className='text-white mt-[4rem] bg-black h-[12rem] wiggly'>
      <div className='border-b flex flex-col md:flex-row justify-around items-center h-[9rem] '>
        <div className='logo-name'>
         <h1 className=' text-4xl wiggly'>Frysk</h1>
         <p className=' text-xs'>Increasing finance leverage on the Frax ecosystem</p>
        </div>
        <div className='logo-name hidden lg:block'>
         <p className='font-bold wiggly text-xl'>Services</p>
         <ul className='text-sm'><li>Home</li> <li>Vault</li> <li>Bridge</li> </ul>
        </div>
        <div className='logo-name hidden lg:block'>
         <p className='font-bold wiggly text-xl'>Resources</p>
         <ul className='text-sm'><li>Docs</li> <li>Sponsors</li> <li>About Frax</li> </ul>
        </div>
        <div className='logo-name hidden lg:block'>
         <p className='font-bold wiggly text-xl'>Social Media</p>
         <ul className='text-sm'>
          <li><FaDiscord /></li>
          <li><FaTelegram /></li>
          <li><FaXTwitter /></li>
         </ul>
        </div>
      </div>
      <p className='text-center flex flex-col text-xs justify h-1 '>Copyright 2024 - All Rights Reserved</p>      
    </footer>
    </main>
  ); 
}
