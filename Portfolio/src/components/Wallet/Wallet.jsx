import { useState } from "react";
import ABI from "./ABI.json";
import Web3 from "web3";
import "./Wallet.css";

const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(false);
  const isAndroid = /android/i.test(navigator.userAgent);

  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      // Request MetaMask accounts
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Check if the user is connected to the Sepolia network
      const chainId = await web3.eth.getChainId();
      const requiredChainId = 11155111; // Sepolia Testnet Chain ID

      // Convert chainId from BigInt to number (if it's a BigInt)
      const chainIdAsNumber = Number(chainId);

      // console.log("Current Chain ID:", chainIdAsNumber); // Debug log

      if (chainIdAsNumber !== requiredChainId) {
        alert("Please switch to the Sepolia network.");
        return;
      }


      // Initialize the contract
      const contract = new web3.eth.Contract(
        ABI, import.meta.env.VITE_CONTRACT_ADDRESS // Your contract address        
      );

      // Save state after successful connection
      saveState({ web3, contract });            

      // Set connection status to true
      setConnected(true);
    } catch (error) {
      // Handle errors (e.g., MetaMask not installed, user denied connection)
      if (error.code === 4001) {
        alert("Connection request was rejected by user.");
      } else {
        alert("Please install MetaMask.");
      }
    }
  };

  return (
    <>
      <div className="header">
        {isAndroid && (
          <button className="connectBTN">
            <a href="https://metamask.app.link/dapp/0xparthdev.netlify.app/">
              Click For Mobile
            </a>
          </button>
        )}
        <button className="connectBTN" onClick={init} disabled={connected}>
          {connected ? "Connected" : "Connect MetaMask"}
        </button>
      </div>
    </>
  );
};

export default Wallet;
