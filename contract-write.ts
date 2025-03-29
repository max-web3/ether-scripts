import { formatEther } from "ethers";
import { Contract } from "ethers";
import contractABI from './sanfordNFT.abi.ts'
import { useEthers } from "./utils.ts";

const { provider, signer, wallet } = useEthers()

const signerAddress = await wallet.getAddress()
const balance = await provider.getBalance(signerAddress)
console.log('wallet balance on sepolia', formatEther(balance), ' ETH')

// test contract read
const contractAddress = '0x7cC3D356A6ab3D64bef90e61581DAcf8FeB45a62'
const recieverAddress = signerAddress
const contractRunner = signer

// contract ABI is Application Binary Interface
const testContract = new Contract(contractAddress, contractABI, contractRunner)

const ownerMintTx = await testContract.ownerMint(recieverAddress)

console.log('OWNER MINT TX SENT', ownerMintTx.hash)

await ownerMintTx.wait();

console.log('OWNER MINT TX MINED')

