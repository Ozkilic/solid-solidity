import { ethers } from 'ethers'

import abi from '../utils/Keyboards.json'

const contractAddress = '0xB14d7010ae53e9A92712Afa0F0b511e76b77EBaE'
const contractABI = abi.abi

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    return new ethers.Contract(contractAddress, contractABI, signer)
  } else {
    return undefined
  }
}
