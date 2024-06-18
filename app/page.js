"use client"
import React from 'react';
import Header from "../components/Header";
import { SiWalletconnect } from "react-icons/si";

export default function Home() {
  return (
    <main className="overflow-y-auto min-h-screen flex flex-col bg-[#0b1120]">
      <Header />
      <section className="hero-section flex flex-col text-center justify-center mt-[12rem]">
        <h1 className="text-5xl text-white font-bold "><span className='text-[#FFB07C]'>Stake</span> and Earn Yields on <span className='text-[#FFB07C]'>Frysk</span> <br/> built on the L2 frax chain.</h1>
        <p className="text-gray-300 mt-4 text-md regular">Frysk enables you to Stake and Earn Maximun Yields <br /> through the Frax Protocol on the L2 Frax Blockchain in a seamless, pain free process.</p>        
      </section>      
      <div className="action-buttons flex justify-center mt-10 text-md space-x-4">
        <button className="text-white border rounded-sm py-2 px-2 cursor-pointer transition duration-300 ease-in-out hover:text-blue-400 flex items-center space-x-2">
        <p>Connect Wallet</p> <SiWalletconnect />  
        </button>           
        <button className="text-[#0b1120] font-bold bg-[#FFB07C] rounded-sm py-2 px-3 cursor-pointer transition duration-300 ease-in-out hover:text-white">
        Explore Markets
        </button>        
      </div>
      <section className='second-section mt-[12rem] mx-[16rem] text-white flex justify-around border rounded-sm  items-center'>
        <div className=''>
          1
        </div>
        <div>
          2
        </div>
        <div>
          3
        </div>
      </section>
    </main>
  );
}
