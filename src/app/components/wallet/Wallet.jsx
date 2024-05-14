

import React, { useState, useEffect } from "react";
import { connectWallet } from "../../utils/ConnectWallet";
import Web3Context from '../../context/Web3Context';
import Button from "../button/Button";
import { handleAccountChange } from "../../utils/handleAccountChange";
import { handleChainChange } from "../../utils/handleChainChange";


const Wallet = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    selectedAccount: null,
    liskPayContract: null,
    chainId: null,
    balance: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', () => handleAccountChange(setState));
      window.ethereum.on('chainChanged', () => handleChainChange(setState));
  
      return () => {
        window.ethereum.removeListener('accountsChanged', () => handleAccountChange(setState));
        window.ethereum.removeListener('chainChanged', () => handleChainChange(setState));
      };
    }
  }, []);

  const handleWalletToggle = async () => {
    try {
      setIsLoading(true);
      if (state.selectedAccount) {
        // If already connected, disconnect wallet
        setState({
          provider: null,
          selectedAccount: null,
          liskPayContract: null,
          chainId: null,
          balance: null,
        });
      } else {
        // If not connected, connect wallet
        const {
          provider,
          selectedAccount,
          liskPayContract,
          chainId,
          balance,
        } = await connectWallet();
        console.log(
          "Provider:", provider,
          "selectedAccount:", selectedAccount,
          "liskPayContract:", liskPayContract,
          "chainId:", chainId,
          "balance:", balance,
        )
        setState({
          provider,
          selectedAccount,
          liskPayContract,
          chainId,
          balance,
        });
      }
    } catch (error) {
      console.error("Error connecting Wallet: ", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">

      <div className='flex justify-end mt-6 mr-3'>
        <Button
          onClick={handleWalletToggle}
          type="button"
          label={state.selectedAccount ? "Disconnect wallet" : "Connect wallet"}
          disabled={isLoading}
        />
      </div>
      {isLoading && <p className="ml-12">Please wait Loading.....</p>}
      {!isLoading && state.selectedAccount &&(
        <Web3Context.Provider value={state}>
          {children}
        </Web3Context.Provider>
      )}
      

    </div>
  );
};

export default Wallet;

