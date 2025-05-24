import React, { useState, useEffect } from "react";
import { Card } from "../Components/cards";
import { Button } from "../Components/button";
import transactionLogs from "../Constant/transactionLogs";
import TransactionHistory from "../Components/TransactionHistory"; 
import Referral from "../Components/Referral";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [logs, setLogs] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
    setLogs(transactionLogs);
  }, []);

  return (
    <div className="p-6 space-y-6  bg-[url('https://i.pinimg.com/736x/a7/bf/8e/a7bf8e534918be24fea8fbeeb8552aa9.jpg')] bg-cover bg-center bg-no-repeat
">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4">
  <h1 className="text-3xl font-bold text-center md:text-left p-4">
    User Dashboard
  </h1>

  <div className="flex flex-col sm:flex-row items-center gap-3">
    <img
      src="https://i.pinimg.com/736x/9f/a4/32/9fa432e99b95d6c73ecba3665c44d015.jpg"
      alt="Profile"
      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
    />

    <p className="text-sm sm:text-base lg:text-lg font-semibold text-center sm:text-left">
      Sadwel Eunton
    </p>
  </div>
</div>

           <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-4">
  {[
    "Dashboard",
    "Investment",
    "Withdraw",
    "History",
    "Referrals",
    "Settings",
  ].map((item,i) => (
    <Button key={i} items={item} />
  ))}
</div>

<div className="w-full max-w-screen h-[2px] bg-blue-500 mx-auto"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Total Payout", value: "$7,480.00" },
          { title: "Deposits Total", value: "$24k.00" },
          { title: "Pending Amount", value: "$242.00" },
          { title: "Interest Earn", value: "$465.00" },
          { title: "Total Earning", value: "$158.00" },
          { title: "Referral Earnings", value: "$814.00" },
          { title: "Fund Transfer", value: "$534.00" },
        ].map((item, i) => (
          <Card key={i}  item={item} className="rounded-2xl shadow-md text-black" />
        
        ))}
      </div>

      <Referral 
        referralLink="https://example.com/referral/abc123" 
        referralCount={12} 
        />


      <TransactionHistory
        logs={logs}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Dashboard;
