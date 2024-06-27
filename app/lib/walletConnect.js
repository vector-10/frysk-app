import { Core } from '@walletconnect/core'
import { Web3Wallet } from '@walletconnect/web3wallet'

const core = new Core({
  projectId: process.env.WALLET_PROJECT_ID
})

const metadata = {
  name: 'frysk',
  description: 'AppKit Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const initWeb3Wallet = async () => {
  return await Web3Wallet.init({
    core,
    metadata
  })
}

export { initWeb3Wallet }
