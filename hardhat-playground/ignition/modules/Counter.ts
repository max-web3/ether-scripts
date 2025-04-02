// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { WALLET_PRIVATE_KEY } from "../../env-variables";

const CounterModule = buildModule("CounterModule", (m) => {
  const counter = m.contract("Counter", [], {});
  return { counter };
});

export default CounterModule;
