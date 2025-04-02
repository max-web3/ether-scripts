import { useEthers } from "./utils.ts";

const { provider } = useEthers()

console.log(provider)

const res = await provider.getBlockNumber()

console.log(res)