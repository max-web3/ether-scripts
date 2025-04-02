import { task } from "hardhat/config";
import { useEthers } from "./utils";
import { formatEther, parseEther } from "ethers";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();
  
    for (const account of accounts) {
      console.log(account.address);
    }
  });
  
task("account_balance", "Prints account #0 balance", async (taskArgs, hre) => {
    /** Without using hardhat interace */
    // const { provider } = useEthers()
    // const balance = await provider.getBalance('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
    // console.log(formatEther(balance))

    /** Using hardhat interface */
    const account = await hre.ethers.getSigner('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
    console.log(
        formatEther(await account.provider.getBalance('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')),
    )
  });
  
export default {}