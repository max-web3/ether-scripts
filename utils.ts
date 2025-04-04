import "dotenv/config";

import { ethers, JsonRpcProvider } from "ethers";
import { LOCAL_GETH_ADDRESS, MAINNET_INFURA_URL, SEPOLIA_INFURA_URL, WALLET_PRIVATE_KEY } from "./env-variables.ts";
import { Wallet } from "ethers";

const generateNewWallet = () => {
    // 0xD37595240a7685BbEB95f7ecF7C7faC4566c3028
    const wallet = ethers.Wallet.createRandom();
  
    console.log("address:", wallet.address);
    console.log("private key:", wallet.privateKey);
    console.log("mnemonic:", wallet.mnemonic?.phrase);
  };

const getProvider = (mainnet = false) => {
  // const providerUrl = mainnet
  //   ? MAINNET_INFURA_URL
  //   : SEPOLIA_INFURA_URL;

  const providerUrl = LOCAL_GETH_ADDRESS;

  return new JsonRpcProvider(providerUrl);
};

const getWallet = () => {
    return new Wallet(WALLET_PRIVATE_KEY || '')    
}

const getSigner = (provider, wallet) => {
  return wallet.connect(provider)
};

export const useEthers = (mainnet = false) => {
    const provider = getProvider(mainnet)
    const wallet = getWallet()
    const signer = getSigner(provider, wallet)

    return {
        provider,
        wallet,
        signer,
    }
}
