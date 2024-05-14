import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying PayLisk contract with the account:", deployer.address);

    const LiskPay = await ethers.getContractFactory("LiskPay");
    const liskPay = await LiskPay.deploy(); // Deploy the contract

    console.log("Target set to:", liskPay.target);

    // Target set to: 0x7c42E9A89e2f6B2DdF28eA60eFcDF366C1916628
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
