
import { network } from "hardhat";

const { ethers } = await network.connect("sepolia");

const greeter = await ethers.getContractAt(
  "Greeter",
  "0x703Eb0b36C2a075627F3C57b384db6993B71483A"
);

console.log("Greeting:", await greeter.greet());
