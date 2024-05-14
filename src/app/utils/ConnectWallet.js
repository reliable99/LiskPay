


import { ethers, Contract } from "ethers";
import {liskPayAddress,  liskPay } from "../context/constant";

export const connectWallet = async () => {
	const network = {
		liskSepolia: {
			chainId: `0x${Number(4202).toString(16)}`,
			chainName: "Lisk Sepolia Testnet",
			nativeCurrency: {
				name: "Sepolia Ether",
				symbol: "ETH",
				decimals: 18,
			},
			rpcUrls: ["https://rpc.sepolia-api.lisk.com"],
			blockExplorerUrls: ["https://sepolia-blockscout.lisk.com"],
		},
	};

	try {
		let [signer, provider, liskPayContract, chainId, balance] = [null, null, null, null, null];
		if (window.ethereum === null) {
			throw new Error("Metamask is not installed");
		}
		await window.ethereum.request({
			method: "wallet_addEthereumChain",
			params: [
				{
					...network.liskSepolia,
				},
			],
		});

		const accounts = await window.ethereum.request({
			method: "eth_requestAccounts",
		});

		let chainIdHex = await window.ethereum.request({
			method: "eth_chainId",
		});
		chainId = parseInt(chainIdHex, 16);

		let selectedAccount = accounts[0];
		if (!selectedAccount) {
			throw new Error("No ethereum accounts available");
		}

		provider = new ethers.BrowserProvider(window.ethereum);
		signer = await provider.getSigner();

		    const liskPayContractAddress = liskPayAddress;
			liskPayContract = new Contract(liskPayContractAddress, liskPay, signer);



		const BigNumBalance = await provider.getBalance(selectedAccount);
		console.log(String(BigNumBalance))
		 balance = Number(ethers.formatEther(BigNumBalance))
		console.log(balance)



		return { provider, selectedAccount, liskPayContract, chainId, balance };
	} catch (error) {
		console.error(error);
		throw error;
	}
};