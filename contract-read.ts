import { formatEther } from "ethers";
import { Contract } from "ethers";
import contractABI from './sanfordNFT.abi.ts'
import { useEthers } from "./utils.ts";

const { provider } = useEthers()

// test contract read
const contractAddress = '0x7cC3D356A6ab3D64bef90e61581DAcf8FeB45a62'
const contractRunner = provider

// contract ABI is Application Binary Interface
const testContract = new Contract(contractAddress, contractABI, contractRunner)

const mintPrice = await testContract.MINT_PRICE()

console.log('mint price', formatEther(mintPrice))

const mintPriceFuncHash = '0xc002d23d'

const mintPriceManual = await provider.call({
    to: contractAddress,
    data: mintPriceFuncHash
})

console.log('mint price manual', formatEther(mintPriceManual))

