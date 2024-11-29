import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";

const earningsData = [
  {month: "Jan", earnings: 5000},
  {month: "Feb", earnings: 10000},
  {month: "Mar", earnings: 8000},
  {month: "Apr", earnings: 36450},
  {month: "May", earnings: 15000},
  {month: "Jun", earnings: 20000},
  {month: "Jul", earnings: 4000},
  {month: "Aug", earnings: 18000},
  {month: "Sep", earnings: 25000},
  {month: "Oct", earnings: 22000},
  {month: "Nov", earnings: 27000},
  {month: "Dec", earnings: 30000},
];

const EarningsChart = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="md:text-xl  font-semibold text-gray-800 font-poppins tracking-tight">All Time Earnings</h3>
        <div className="flex flex-col md:flex-row space-x-4 items-center font-poppins tracking-tight font-medium">
          <p className="md:text-md text-sm"> ₹ 4,94,587.36 </p>
       <div className="hidden md:flex space-x-2">
       <select className="px-3 py-2 text-sm border rounded-lg font-poppins bg-white tracking-tight focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option value="Product">Product</option>
            <option value="Service">Service</option>
          </select>
          <select className="px-3 py-2 text-sm border font-poppins bg-white tracking-tight rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option value="Last Year">Last Year</option>
            <option value="Last Month">Last Month</option>
          </select>
       </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={earningsData} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" tick={{fontSize: 12, fill: "#9ca3af"}} tickLine={false} axisLine={{stroke: "#e5e7eb"}} />
          <YAxis tick={{fontSize: 12, fill: "#9ca3af"}} tickLine={false} axisLine={{stroke: "#e5e7eb"}} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "5px",
            }}
            labelStyle={{color: "#6b7280"}}
            cursor={{stroke: "#f97316", strokeWidth: 2}}
          />
          <Line type="monotone" dataKey="earnings" stroke="#f97316" strokeWidth={3} dot={{r: 6, fill: "#fff", stroke: "#f97316", strokeWidth: 2}} activeDot={{r: 8, fill: "#f97316", strokeWidth: 0}} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
