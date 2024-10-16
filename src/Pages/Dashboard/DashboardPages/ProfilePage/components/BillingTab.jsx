import { useState } from "react";

const BillingTab = () => {
  const [isBill] = useState(true);


  const billingHistory = [
    { id: 1, amount: "$10.00", date: "2024-10-01", status: "Paid" },
    { id: 2, amount: "$15.00", date: "2024-09-15", status: "Paid" },
    { id: 3, amount: "$20.00", date: "2024-08-30", status: "Pending" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="shadow-md rounded-lg p-4 md:p-6 w-full flex flex-col gap-3">
        <h2 className="text-sm md:text-base font-semibold mb-2">
          Your SuperProfile subscription
        </h2>
        <hr className="border-gray-100 mb-4" />
        <div className="flex flex-col md:flex-row justify-between items-center bg-neutral-100 shadow-md rounded-lg p-4 md:p-6 w-full">
          <div className="flex flex-col gap-1">
            <p className="text-xs md:text-sm">Your plan</p>
            <h2 className="font-semibold text-sm md:text-lg">Starter plan (Free-trial)</h2>
            <p className="text-xs text-red-400">
              Free-trial ends on 18 October 2024
            </p>
          </div>
          <div className="border rounded-full border-orange-600 bg-amber-100 p-1 mt-3 md:mt-0">
            Trial ends in 1d:21h:9m:9s
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-sky-100 shadow-md rounded-lg p-4 md:p-6 w-full">
          <p className="text-sm">
            To ensure that the sales on your products are not interrupted after
            your free-trial ends, subscribe to SuperProfile today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-sky-100 text-black rounded-full border border-black text-sm p-2 transition duration-200 hover:bg-sky-200 w-full sm:w-auto">
              View all plans
            </button>
            <button className="bg-orange-600 text-white rounded-full text-sm p-2 transition duration-200 w-full sm:w-auto">
              Buy Plan
            </button>
          </div>
        </div>
      </div>

      {/* Billing History Section */}
      <div className="shadow-md rounded-lg p-4 md:p-6 w-full flex flex-col gap-3">
        <h2 className="text-sm md:text-base font-semibold mb-2">
          Billing history
        </h2>
        <hr className="border-gray-100 mb-4" />
        {isBill ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 p-2 text-left text-sm font-semibold">SL</th>
                  <th className="border border-gray-300 p-2 text-left text-sm font-semibold">Amount</th>
                  <th className="border border-gray-300 p-2 text-left text-sm font-semibold">Date</th>
                  <th className="border border-gray-300 p-2 text-left text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((bill) => (
                  <tr key={bill.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-2 text-sm">{bill.id}</td>
                    <td className="border border-gray-300 p-2 text-sm">{bill.amount}</td>
                    <td className="border border-gray-300 p-2 text-sm">{bill.date}</td>
                    <td className={`border border-gray-300 p-2 text-sm ${bill.status === "Paid" ? "text-green-500" : "text-red-500"}`}>
                      {bill.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <span className="text-sm text-gray-600">No billing history yet</span>
        )}
      </div>
    </div>
  );
};

export default BillingTab;
