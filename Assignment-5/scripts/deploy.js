import { network } from "hardhat";

const { ethers } = await network.connect();

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with account:", deployer.address);

    const MyToken = await ethers.getContractFactory("MyToken");

    const initialSupply = ethers.parseEther("1000000");
    const token = await MyToken.deploy(initialSupply);

    await token.waitForDeployment();

    console.log("MyToken deployed to:", await token.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});