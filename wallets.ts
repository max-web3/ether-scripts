import { Wallet } from "ethers";
import { SEPOLIA_INFURA_URL, SEPOLIA_MAIN_ADDRESS, WALLET_PRIVATE_KEY } from "./env-variables.ts";
import { JsonRpcProvider } from "ethers";

console.log(WALLET_PRIVATE_KEY)
const wallet = new Wallet(WALLET_PRIVATE_KEY || '')

console.log('address', wallet.address)

// these are not available without provider specified
// console.log('mnemonic', wallet.mnemonic)
// console.log('public key', wallet.publicKey)
// console.log('extended key', wallet.extendedKey)

console.log('private key', wallet.privateKey)
console.log('signing key', wallet.signingKey)

// we can have unlimited addresses from our wallet
// const base_wallet_mnemonic = wallet.mnemonic!
// const addresses_count = 10

// for (let i = 0; i < addresses_count; i++) {
//     const currentPath = `m/44'/60'/0'/0/${i}`
//     const currentWallet = HDNodeWallet.fromMnemonic(base_wallet_mnemonic, currentPath)

//     console.log(`--- Wallet ${i} ---`)
//     console.log('address', currentWallet.address)
//     console.log('public key', currentWallet.publicKey)
//     console.log('private key', currentWallet.privateKey)
// }

// console.log(HDNodeWallet.fromExtendedKey(wallet.extendedKey))

// connect wallet to provider
// const provider = new InfuraProvider(NETWORK)
// const signer = wallet.connect(provider)

// console.log('Connected! Signer', signer)

// console.log(await wallet.signMessage('Hello world'))

const provider = new JsonRpcProvider(SEPOLIA_INFURA_URL)
// const provider = new JsonRpcProvider(LOCAL_GETH_ADDRESS)

const signer = wallet.connect(provider)
// const signedMessage = await signer.signMessage('Hello world')
// console.log('signed', signedMessage)

// const signerAddress = verifyMessage('Hello world', signedMessage)
// console.log('signer address verified', signerAddress)

const signerAddress = await wallet.getAddress()
const balance = await provider.getBalance(signerAddress)

console.log('wallet balance on sepolia', balance)
console.log('value to send', BigInt(balance) / BigInt(2))

const tx = await signer.sendTransaction({
    to: SEPOLIA_MAIN_ADDRESS,
    value: BigInt(balance) / BigInt(2)
    
})

console.log('TX sent!', tx)

await tx.wait()

console.log('TX mined!', tx)