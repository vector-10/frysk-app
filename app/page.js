"use client"
import React from 'react';
import Header from "../components/Header";
import { SiWalletconnect } from "react-icons/si";

export default function Home() {
  return (
    <main>
      <Header />
    <div className="overflow-y-auto min-h-screen flex flex-col bg-[#0b1120]">      
      <section className="hero-section flex flex-col text-center justify-center mt-[16rem]">
        <h1 className=" text-4xl md:text-5xl text-white font-bold "><span className='text-[#FFB07C]'>Stake</span> and Earn Yields on <span className='text-[#FFB07C]'>Frysk</span> <br/> built on the L2 frax chain.</h1>
        <p className="text-gray-300 mt-4 text-xs md:text-lg regular">Frysk enables you to Stake and Earn Maximun Yields <br /> through the Frax Protocol on the L2 Frax Blockchain in a seamless, pain free process.</p>        
      </section>      
      <div className="action-buttons flex justify-center mt-10 text-lg space-x-4 wiggly">
        <button className="text-white border rounded-sm py-2 px-2 cursor-pointer transition duration-300 ease-in-out hover:text-blue-400 flex items-center space-x-2">
        <p>Connect Wallet</p> <SiWalletconnect />  
        </button>           
        <button className="text-[#0b1120] font-bold bg-[#FFB07C] rounded-sm py-2 px-3 cursor-pointer transition duration-300 ease-in-out hover:text-white">
        Explore Markets
        </button>        
      </div>
      <div class="grid grid-cols-3 divide-x text-lg mt-[12rem] regular text-center border mx-[8rem] md:mx-[14rem] h-[7rem] bg-black text-white rounded-lg shadow-lg shadow-[#ffb07c9e]">
          <div className='flex flex-col justify-center items-center rounded-sm cursor-pointer '>           
           <p className='text-xs'>Trading Volume</p>
           <p className='font-bold wiggly text-4xl'>1</p>
           <p className='text-xs'>In the Last 24 Hours</p>
          </div>
          <div className='flex flex-col justify-center items-center rounded-sm  cursor-pointer'>           
          <p className='text-xs'>Staking Volume</p>
           <p className='font-bold wiggly text-4xl'>1</p>
           <p className=' text-xs'>Currently Open</p>
          </div>
          <div className='flex flex-col justify-center items-center rounded-sm  cursor-pointer'>          
          <p className=' text-xs'>Open Liquidity</p>
           <p className='font-bold wiggly text-4xl'>1</p>
           <p className=' text-xs'>In the Last 24 Hours</p>
          </div>          
        </div>

        <section className='flex flex-col justify-center items-center text-white mt-[10rem] font-bold text-center'>
          <h1 className='text-5xl'> <span className='text-[#FFB07C]'>Surplus</span> Yields <br/> <span className='text-[#FFB07C]'>Maximum</span> Stakes!</h1>
          <p className='regular text-sm mt-[2rem]'> Featuring a variety of assets from across EVM and Cosmos, with new assets added regularly</p>
        </section>
    </div>
    </main>
  );
}
