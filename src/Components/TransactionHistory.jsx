import React from "react";
import { Pagination } from "../Components/pagination";

const TransactionHistory = ({ logs, currentPage, setCurrentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLogs = logs.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(logs.length / itemsPerPage);

  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white p-4">
      <h2
        className="
          text-2xl font-semibold mb-4
          bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600
          bg-clip-text text-transparent
        "
      >
        Recent Transaction History
      </h2>

      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full text-sm text-left rounded-xl overflow-hidden">
          <thead className="bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 text-white">
            <tr>
              <th className="p-3 font-bold">Transaction NO</th>
              <th className="p-3 font-bold">Date</th>
              <th className="p-3 font-bold">Amount</th>
              <th className="p-3 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedLogs.map((log) => (
              <tr
                key={log.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="p-3 font-bold">{log.id}</td>
                <td className="p-3">{log.date}</td>
                <td className="p-3">{log.amount}</td>
                <td
                  className={`p-3 font-semibold ${
                    log.status.toLowerCase() === "completed"
                      ? "text-green-600"
                      : log.status.toLowerCase() === "pending"
                      ? "text-yellow-600"
                      : log.status.toLowerCase() === "failed"
                      ? "text-red-600"
                      : "text-gray-800"
                  }`}
                >
                  {log.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default TransactionHistory;
