import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { useContext } from "react";
import Web3Context from "../context/Web3Context";

const AccountDetails = () => {
  const { selectedAccount, liskPayContract, balance } = useContext(Web3Context);

  const [accountName, setAccountName] = useState("");
  // const [tokenBalance, setTokenBalance] = useState("");

  useEffect(() => {
    const init = async () => {
      if (selectedAccount && liskPayContract) {
        // Call contract functions
        const accountNameResult = await liskPayContract.methods.getMyName(selectedAccount).call();
        const tokenBalanceResult = await liskPayContract.methods.getBalance(selectedAccount).call();

        setAccountName(accountNameResult);
        setTokenBalance(tokenBalanceResult);
      }
    };

    init();
  }, [selectedAccount, liskPayContract]);

  const setUsername = async () => {
    const newName = prompt("Enter your new username:");
    if (newName && selectedAccount && liskPayContract) {
      try {
        // Call contract function to set username
        await liskPayContract.methods.addName(newName).send({ from: selectedAccount });

        // Update local state
        setAccountName(newName);
      } catch (error) {
        console.error("Error setting username:", error);
      }
    }
  };

  const switchAccounts = () => {
    // Logic to switch accounts
    // For example, you could prompt the user to select a different account from their wallet
    // or handle it based on your specific requirements.
    // You would then update the accountAddress state accordingly.
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-2xl text-black">
      <h2 className="text-xl font-semibold my-4 border-b border-gray-300">Account Details</h2>

      <div className="flex items-center gap-4 mb-4">
        <FaUser className="w-6 h-6 text-gray-500" />
        <div>
          <div className="font-semibold">{accountName}</div>
          <div className="text-sm text-gray-500">Address:{selectedAccount.slice(0, 4)}...{selectedAccount.slice(38)}</div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <AiTwotoneSafetyCertificate className="w-7 h-7 text-gray-500" />
        <div>
          <div className="font-semibold">LiskPay Tokens</div>
          <div className="text-sm text-gray-500">{balance.toFixed(6)} LSKP</div>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <button className="text-blue-500 hover:text-blue-700 border border-blue-500 hover:border-blue-700 rounded-lg px-4" onClick={setUsername}>
          Set Username
        </button>
        <button className="text-blue-500 hover:text-blue-700 border border-blue-500 hover:border-blue-700 rounded-lg px-4" onClick={switchAccounts}>
          Switch Accounts
        </button>
      </div>
    </div>
  );
};

export default AccountDetails;