import React from "react";

export function Card({ item }) {
  return (
    <div
      className={`
        rounded-2xl shadow-lg
        bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600
        text-white
        p-6
      `}
    >
      <div className="p-4 
        text-white text-center flex gap-2 flex-col ">
        <h2 className="font-medium">{item.title}</h2>
        <h3 className="font-semibold">{item.value}</h3>
      </div>
    </div>
  );
}
