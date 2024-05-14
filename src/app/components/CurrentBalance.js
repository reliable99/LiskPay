import { useContext } from "react";
import Web3Context from "../context/Web3Context";

function CurrentBalance() {

  const {provider, selectedAccount, liskPayContract, chainId, balance} = useContext(Web3Context);

  console.log(balance)
  console.log(provider, selectedAccount, liskPayContract, chainId, balance)


  return (
    <div
      title="Current Balance"
      className="w-full bg-white shadow-2xl rounded-lg text-black"
    >
      <h2 className="text-xl font-semibold my-4 ml-4 border-b border-gray-300">
        Current Balance
      </h2>
      <div className="flex flex-col items-center gap-2">
        <div className="px-3 text-lg ">
        {balance > 0 ? balance.toFixed(3) : 0} ETH
        </div>

        <div className="text-lg text-black">Available</div>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row justify-around mt-4 pb-3">
        <div className="text-blue-600 cursor-pointer hover:text-blue-800 border border-blue-500 hover:border-blue-700 rounded-bl-2xl rounded-tr-lg rounded-br-lg px-5 mb-4 lg:mb-0 text-center">
          Swap Tokens
        </div>
        <div className="text-blue-600 cursor-pointer hover:text-blue-800 border border-blue-500 hover:border-blue-700 rounded-br-2xl rounded-tl-lg rounded-bl-lg px-5 mb-4 lg:mb-0 text-center">
          Bridge Tokens
        </div>
      </div>
    </div>
  );
}

export default CurrentBalance;
