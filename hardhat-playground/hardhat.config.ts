import { ETHERSCAN_API_KEY, SEPOLIA_INFURA_URL, WALLET_PRIVATE_KEY } from "./env-variables";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import './tasks/getBalance'
import './tasks/sendEth'
import './tasks/lockContract'
import './tasks/counterContract'

const config: HardhatUserConfig = {
  defaultNetwork: 'localhost',
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_INFURA_URL,
      accounts: [WALLET_PRIVATE_KEY ?? ''],
    }
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY || '',
    },
  },
};

export default config;
