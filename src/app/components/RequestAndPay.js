// import React, { useState, useContext, useRef } from "react";
// import { DollarOutlined, SwapOutlined } from "@ant-design/icons";
// import { Modal, Input, InputNumber } from "antd";
// import Web3Context from "../context/Web3Context";
// import { toast } from 'react-toastify'; // Import toast if using react-toastify

// const RequestAndPay = () => {
//   const { provider, selectedAccount, liskPayContract, chainId, balance } = useContext(Web3Context);

//   console.log(provider, selectedAccount, liskPayContract, chainId, balance);

//   const [payModal, setPayModal] = useState(false);
//   const [requestor, setRequestor] = useState(false);
//   let [amount, setAmount] = useState("");
//   const [address, setAddress] = useState("");
//   const [message, setMessage] = useState("");

//   const togglePayModal = () => {
//     setPayModal(!payModal);
//   };

//   const toggleRequestModal = () => {
//     setRequestor(!requestor);
//   };

//   const createPaymentRequest = async () => {
//     try {
//       if (!liskPayContract) {
//         throw new Error("Contract not loaded");
//       }



//       // Ensure the contract method exists
//       if (typeof liskPayContract.createRequest !== "function") {
//         throw new Error("createRequest method not found on contract");
//       }

    
//       // Call createRequest function with converted amount
//       const tx = await liskPayContract.createRequest(requestor, selectedAccount, amount, message);
//       amount = formatEther(amount, 18).toString();
//       await toast.promise(tx.wait(), {
//         pending: "Transaction is Pending...",
//         success: "Amount Deposited Successfully",
//         error: "Transaction Failed",
//       });

//       // Close the modal after successful creation of payment request
//       toggleRequestModal();
//     } catch (error) {
//       console.error('Error creating payment request:', error);
//       toast.error(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <>
//       <Modal
//         title="Confirm Payment"
//         visible={payModal}
//         onOk={togglePayModal}
//         onCancel={togglePayModal}
//         okText="Proceed To Pay"
//         cancelText="Cancel"
//       >
//         {/* Additional content for payment modal */}
//       </Modal>

//       <Modal
//         title="Request A Payment"
//         visible={requestor}
//         onOk={createPaymentRequest} // Call createPaymentRequest function on modal OK
//         onCancel={toggleRequestModal}
//         okText="Proceed To Request"
//         cancelText="Cancel"
//       >
//         <p>Amount (Lisk)</p>
//         <InputNumber
//           min={0.0001}
//           step={0.0001}
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <p>From (address)</p>
//         <Input
//           placeholder="0x..."
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//         <p>Message</p>
//         <Input
//           placeholder="Lunch Bill..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//       </Modal>

//       <div className="flex justify-center gap-10 p-4 text-black">
//         <div
//           className="flex flex-col items-center justify-center p- border border-gray-800 bg-gray-300 rounded cursor-pointer w-24"
//           onClick={togglePayModal}
//         >
//           <DollarOutlined style={{ fontSize: "26px" }} />
//           <span>Pay</span>
//         </div>

//         <div
//           className="flex flex-col items-center justify-center p-4 border border-gray-800 bg-gray-300 rounded cursor-pointer w-24"
//           onClick={toggleRequestModal}
//           style={{ transition: "background-color 0.6s ease", ":hover": { backgroundColor: "green" } }}
//         >
//           <SwapOutlined style={{ fontSize: "26px" }} />
//           <span>Request</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RequestAndPay;



import React, { useState, useContext } from "react";
import { DollarOutlined, SwapOutlined } from "@ant-design/icons";
import { Modal, Input, InputNumber } from "antd";
import Web3Context from "../context/Web3Context";
import { toast } from 'react-toastify'; // Import toast if using react-toastify
// import { ethers } from "ethers"; // Ensure ethers is imported

const RequestAndPay = () => {
  const [activeMenu, setActiveMenu] = useState('Summary');

  // Function to handle menu clicks and set the active menu item
  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  const { provider, selectedAccount, liskPayContract, chainId, balance } = useContext(Web3Context);

  console.log(provider, selectedAccount, liskPayContract, chainId, balance);

  const [payModal, setPayModal] = useState(false);
  const [requestor, setRequestor] = useState(false);
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const togglePayModal = () => {
    setPayModal(!payModal);
  };

  const toggleRequestModal = () => {
    setRequestor(!requestor);
  };

  const createPaymentRequest = async () => {
    try {
      if (!liskPayContract) {
        throw new Error("Contract not loaded");
      }

      // Ensure the contract method exists
      if (typeof liskPayContract.createRequest !== "function") {
        throw new Error("createRequest method not found on contract");
      }

      // Check and parse amount to correct type
      const parsedAmount = formatEther(amount, 18).toString();

      // Call createRequest function with converted amount
      const tx = await liskPayContract.createRequest(selectedAccount, address, parsedAmount, message);
      
      // Wait for the transaction to be mined
      await toast.promise(tx.wait(), {
        pending: "Transaction is Pending...",
        success: "Amount Deposited Successfully",
        error: "Transaction Failed",
      });

      // Close the modal after successful creation of payment request
      toggleRequestModal();
    } catch (error) {
      console.error('Error creating payment request:', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <Modal
        title="Confirm Payment"
        visible={payModal}
        onOk={togglePayModal}
        onCancel={togglePayModal}
        okText="Proceed To Pay"
        cancelText="Cancel"
      >
        <button>Sending payment to username:</button>
        <p>Value: ETH</p>
        <InputNumber
          min={0.0001}
          step={0.0001}
          value={amount}
          onChange={(value) => setAmount(value)}
        />
      </Modal>

      <Modal
        title="Request A Payment"
        visible={requestor}
        onOk={createPaymentRequest} // Call createPaymentRequest function on modal OK
        onCancel={toggleRequestModal}
        okText="Proceed To Request"
        cancelText="Cancel"
      >
        <p>Amount (Lisk)</p>
        <InputNumber
          min={0.0001}
          step={0.0001}
          value={amount}
          onChange={(value) => setAmount(value)}
        />
        <p>From (address)</p>
        <Input
          placeholder="0x..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <p>Message</p>
        <Input
          placeholder="Lunch Bill..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Modal>

      <div className="flex justify-center gap-10 p-4 text-black">
        <div
          className="flex flex-col items-center justify-center p-4 border border-gray-800 bg-gray-300 rounded cursor-pointer w-24"
          onClick={togglePayModal}
        >
          <DollarOutlined style={{ fontSize: "26px" }} />
          <span>Pay</span>
        </div>

        <div
          className="flex flex-col items-center justify-center p-4 border border-gray-800 bg-gray-300 rounded cursor-pointer w-24"
          onClick={toggleRequestModal}
          style={{ transition: "background-color 0.6s ease", ":hover": { backgroundColor: "green" } }}
        >
          <SwapOutlined style={{ fontSize: "26px" }} />
          <span>Request</span>
        </div>
      </div>
    </>
  );
};

export default RequestAndPay;

