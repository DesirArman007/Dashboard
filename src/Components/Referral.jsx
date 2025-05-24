import React, { useState } from "react";

const Referral = ({ referralLink, referralCount }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

  return (
    <div
      className="
        rounded-2xl
        bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600
        text-white
        p-4
        shadow-lg
        max-w-3xl
        mx-auto
      "
    >
      <h3 className="text-xl font-bold mb-4">Your Referral Link</h3>

<div className="flex flex-wrap items-center justify-between max-w-3xl">
        <div className="flex flex-grow max-w-md">
          <input
            type="text"
            readOnly
            value={referralLink}
            className="
              flex-grow
              rounded-l-md
              p-2
              text-black
              cursor-pointer
              select-all
              focus:outline-none
              bg-white bg-opacity-70
            "
            onClick={(e) => e.target.select()}
          />
          <button
            onClick={handleCopy}
            className="
              bg-white bg-opacity-80
              text-blue-700
              font-semibold
              px-4
              rounded-r-md
              hover:bg-opacity-100
              transition
            "
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-lg font-semibold whitespace-nowrap">
          Total Referrals: <span>{referralCount}</span>
        </p>
      </div>
    </div>
  );
};

export default Referral;
