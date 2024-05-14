// import React, { useState, useEffect } from 'react';
// import { useContext } from "react";
// import Web3Context from "../context/Web3Context";


// function RecentActivity() {
//   const {provider, selectedAccount, liskPayContract, chainId, balance} = useContext(Web3Context);

//   console.log(provider, selectedAccount, liskPayContract, chainId, balance)

//   const [history, setHistory] = useState([]);

//   useEffect(() => {


//     const fetchHistory = async () => {
//       try {
//         const userHistory = await contract.getMyHistory(selectedAccount); // Call getMyHistory function

//         // Format fetched data into desired format (adjust as per your contract's output)
//         const formattedHistory = userHistory.map((item, index) => ({
//           key: index.toString(),
//           subject: item.otherPartyName,
//           type: item.action,
//           address: item.otherPartyAddress,
//           message: item.message,
//           amount: ethers.utils.formatEther(item.amount), // Convert from wei to ether
//         }));

//         setHistory(formattedHistory);
//       } catch (error) {
//         console.error('Error fetching history:', error);
//       }
//     };

//     fetchHistory(); // Fetch user's history on component mount
//   }, []);

//   return (
//     <div className="w-full mx-auto p-4 text-black shadow-2xl rounded-lg pb-20">
//       <h1 className="text-xl font-bold mb-4">Recent Activity</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-3 text-left">Payment Subject</th>
//               <th className="p-3 text-left">Type</th>
//               <th className="p-3 text-left">Address</th>
//               <th className="p-3 text-left">Message</th>
//               <th className="p-3 text-left">Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {history.map((record) => (
//               <tr key={record.key} className="border-b border-gray-300">
//                 <td className="p-3">{record.subject}</td>
//                 <td className="p-3">{record.type}</td>
//                 <td className="p-3">{record.address}</td>
//                 <td className="p-3">{record.message}</td>
//                 <td className={`p-3 ${record.type === 'Send' ? 'text-red-500' : 'text-green-500'}`}>
//                   {record.type === 'Send' ? '-' : '+'}
//                   {record.amount} Lisk
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default RecentActivity;


import React from 'react';

const history = [
  {
    key: '1',
    subject: 'Larry',
    type: 'Send',
    address: '0x12...2345',
    message: 'Cookies 🍪',
    amount: '3.50',
  },
  {
    key: '2',
    subject: 'khady-Bola',
    type: 'Receive',
    address: '0x12...2345',
    message: 'Dinner 🍔',
    amount: '22.30',
  },
  {
    key: '3',
    subject: 'Supreme',
    type: 'Send',
    address: '0x12...2345',
    message: 'Movie Tickets',
    amount: '17.31',
  },
  {
    key: '5',
    subject: 'Charlie',
    type: 'Send',
    address: '0x12...2345',
    message: 'Golf ⛳️',
    amount: '49.99',
  },
  {
    key: '7',
    subject: 'Mike',
    type: 'Send',
    address: '0x12...2345',
    message: 'Poker ♠️',
    amount: '3.50',
  },
  {
    key: '8',
    subject: 'Mumeen',
    type: 'Send',
    address: '0x12...2345',
    message: 'Car Fix',
    amount: '30.00',
  },
];

function RecentActivity() {
  return (
    <div className=" w-full mx-auto p-4 text-black shadow-2xl rounded-lg pb-20  ">
      <h1 className="text-xl font-bold mb-4">Recent Activity</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Payment Subject</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record) => (
              <tr key={record.key} className="border-b border-gray-300">
                <td className="p-3">{record.subject}</td>
                <td className="p-3">{record.type}</td>
                <td className="p-3">{record.address}</td>
                <td className="p-3">{record.message}</td>
                <td
                  className={`p-3 ${record.type === 'Send' ? 'text-red-500' : 'text-green-500'}`}
                >
                  {record.type === 'Send' ? '-' : '+'}
                  {record.amount} Lisk
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentActivity;

