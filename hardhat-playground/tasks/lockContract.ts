import { task } from "hardhat/config";
  
task("lock_withdraw", "Withdraw from Lock.sol", async (taskArgs, hre) => {
    const lockContractAbi = await hre.ethers.getContractAt('Lock', '0x5FbDB2315678afecb367f032d93F642f64180aa3')
    const owner = lockContractAbi.owner
    console.log('owner', owner)
    const res = await lockContractAbi.withdraw()
    console.log('withdraw', res)
  });
  
export default {}