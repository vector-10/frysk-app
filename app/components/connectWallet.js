'use client'

import { useState } from 'react'
import { initWeb3Wallet } from '../lib/walletConnect'

const ConnectWallet = () => {
  const [web3Wallet, setWeb3Wallet] = useState(null)

  const connectWallet = async () => {
    try {
      const wallet = await initWeb3Wallet()
      setWeb3Wallet(wallet)
      // Add additional logic to handle wallet connection
      console.log('Wallet connected:', wallet)
    } catch (error) {
      console.error('Connection failed:', error)
    }
  }

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {web3Wallet && <p>Wallet Connected!</p>}
    </div>
  )
}

export default ConnectWallet
