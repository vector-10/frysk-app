"use client"
import React from 'react';
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="overflow-y-auto min-h-screen flex flex-col bg-[#0b1120]">
      <Header />
      <section className="hero-section flex flex-col text-center justify-center mt-[12rem]">
        <h1 className="text-5xl text-white font-bold">Stake and and Earn Yields on Frysk <br/> built on the L2 frax chain.</h1>
        <p className="text-gray-300 mt-4 text-md regular">A filtered study application and knowledge base <br /> through Artificial Intelligence built to arm you with core concepts to Ace your JAMB examinations.</p>        
      </section>      
      <div className="action-buttons flex justify-center mt-10 text-md">
      <button className="text-white border rounded-sm py-2 px-5 mx-3 cursor-pointer transition duration-300 ease-in-out hover:text-blue-400">
      Connect Wallet
      </button>           
      <button className="text-[#0b1120] font-bold bg-white border rounded-sm py-2 px-5 mx-3 cursor-pointer transition duration-300 ease-in-out">
      Explore Markets
      </button>           
    
      </div>
    </main>
  );
}
