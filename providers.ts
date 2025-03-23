import 'dotenv/config'
import { formatEther, formatUnits, InfuraProvider } from 'ethers'
import { JsonRpcApiProvider } from 'ethers'
import { EtherscanProvider, getDefaultProvider } from 'ethers'
import { INFURA_API_KEY, NETWORK } from './env-variables';

const provider = getDefaultProvider(NETWORK, {
    infura: INFURA_API_KEY,
});

const blockNumber = await provider.getBlockNumber()
console.log('current block number', blockNumber)

const ens = await provider.resolveName('atg.eth')
console.log('Austin Griffin ENS', ens)

const balance = await provider.getBalance('ath.eth')
console.log('Austin Griffin balance', formatEther(balance), ' ETH')
