import { task } from "hardhat/config";
import { useEthers } from "./utils";
import { formatEther, getBigInt, parseEther } from "ethers";
import { LOCK_CONTRACT_ADDRESS } from "../env-variables";
  
task("send_eth", "Sends 10 ETH from $1 to $2", async (taskArgs, hre) => {
    /** Without using hardhat interace */
    const { provider, signer, wallet } = useEthers()

    // Get all accounts from the provider
    const accounts = await provider.listAccounts()
    
    // Find account with lowest balance
    let lowestBalance = await provider.getBalance(accounts[0])
    let accountWithLowestBalance = accounts[0]

    for (const account of accounts) {
        const balance = await provider.getBalance(account)
        if (balance < lowestBalance) {
            lowestBalance = balance
            accountWithLowestBalance = account
        }
    }
    
    

    console.log('Account with lowest balance:', accountWithLowestBalance)
    console.log('Balance:', formatEther(lowestBalance), 'ETH')
    
    const addressFrom = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
    const addressTo = LOCK_CONTRACT_ADDRESS || ''

    const balanceFrom = await provider.getBalance(addressFrom)
    console.log('balance from', formatEther(balanceFrom))

    const balanceTo = await provider.getBalance(addressTo)
    console.log('balance to', formatEther(balanceTo))

    const tx = await signer.sendTransaction({
        from: addressFrom,
        to: addressTo,
        value: 1000000000000000,
    })

    console.log('TX SENT')

    await tx.wait();

    console.log('TX MINED', tx.hash)

    /** Using hardhat interface */
    // const account = await hre.ethers.getSigner('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
    // const provider = hre.ethers.getDefaultProvider()
    // console.log(
    //     await account.provider.getBalance('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'),
    //     await provider.getBalance('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
    // )
  });
  
export default {}