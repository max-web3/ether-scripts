import { task } from "hardhat/config";
  
task("increase_counter", "Set counter +1", async (taskArgs, hre) => {
    try {
        const counterContractAbi = await hre.ethers.getContractAt('Counter', '0x5fbdb2315678afecb367f032d93f642f64180aa3')
        
        console.log("Current counter value:", await counterContractAbi.count())
        
        console.log("Initiating counter increase transaction...")
        const tx = await counterContractAbi.increaseCount()
        console.log("Transaction hash:", tx.hash)
        
        // Wait for transaction to be mined
        await tx.wait()
        console.log("Transaction confirmed!")
        
        // Add a small delay for better readability
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        console.log("New counter value:", await counterContractAbi.count())
    } catch (error) {
        console.error("Error occurred:", error)
    }
});
  
export default {}