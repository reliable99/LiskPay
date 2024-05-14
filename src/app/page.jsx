'use client'
import Wallet from "./components/wallet/Wallet"
import {LiskPayProvider} from "./context/LiskPayContext";
import Header from "./components/Header";
import RecentActivity from "./components/RecentActivity";
import CurrentBalance from "./components/CurrentBalance";
import RequestAndPay from "./components/RequestAndPay";
import AccountDetails from "./components/AccountDetails";


export default function Home() {
  return (
    <div>
      <Wallet>
        <LiskPayProvider>
            <Header/>
        <div className="flex flex-col-reverse md:flex-row gap-10 mt-5 justify-center">
          <div className="md:w-1/2">
            <RecentActivity />
          </div>
          <div className="flex flex-col md:w-1/3">
            <div>
              <CurrentBalance />
            </div>
            <div>
              <RequestAndPay />
            </div>
            <div>
              <AccountDetails />
            </div>
          </div>
        </div>
        </LiskPayProvider>
      </Wallet>
  </div>
  );
}





// import Header from "./components/Header";
// import RecentActivity from "./components/RecentActivity";
// import CurrentBalance from "./components/CurrentBalance";
// import RequestAndPay from "./components/RequestAndPay";
// import AccountDetails from "./components/AccountDetails";

// export default function Home() {
//   return (
//     <>
//   <div > 
//     <Header/>
//   </div>
// <div className="flex flex-col-reverse md:flex-row gap-10 mt-5 justify-center">
//   <div className="md:w-1/2">
//     <RecentActivity />
//   </div>
//   <div className="flex flex-col md:w-1/3">
//     <div>
//       <CurrentBalance />
//     </div>
//     <div>
//       <RequestAndPay />
//     </div>
//     <div>
//       <AccountDetails />
//     </div>
//   </div>
// </div>


// {/* <div className="flex gap-10 mt-5 px-10" >
//   <div className="flex flex-col" >
   
//           <div>
//             <CurrentBalance />
//           </div>
//           <div>
//             <RequestAndPay />
//           </div>
//           <div>
//             <AccountDetails />
//           </div>
//           </div>
     
//       <div>
//         <RecentActivity />
//       </div>
 
// </div> */}
// {/* <CurrentBalance /> */}
// {/* <AccountDetails /> */}
// {/* <RecentActivity /> */}
//     </>
//   );
// }





