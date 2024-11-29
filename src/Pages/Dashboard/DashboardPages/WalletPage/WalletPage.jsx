import {IoWallet} from "react-icons/io5";
import {IoSettingsOutline} from "react-icons/io5";
import {walletConfig} from "./WalletConfig";
import CountUp from "react-countup";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import Coin from "../../../../assets/coin.png";
import {useState} from "react";
import Cash from "../../../../assets/cash.png";
import {IoIosWarning} from "react-icons/io";
import {MdKeyboardArrowRight} from "react-icons/md";
import {FaLongArrowAltDown, FaLongArrowAltUp} from "react-icons/fa";
import EarningsChart from "../../../../components/Charts/EarningsChart";
import WalletTableComponent from "../../../../components/Table/WalletTableComponent";

const WalletPage = () => {
  const [selectedDateRange, setSelectedDateRange] = useState("Last Year");
  const dateOptions = ["Last Week", "Last Month", "Last Year", "Custom Range"];

  return (
    <div className="max-w-full min-h-screen md:px-5 md:py-3 px-2 py-2 bg-gradient-to-b from-gray-100 to-white">
      {/* Wallet Section */}
      <div className="flex flex-col bg-white md:py-3 md:px-4 py-3 px-2 rounded-md">
        <div className="flex bg-[#EFF4F5] py-6 px-3 rounded-md items-center justify-between">
          <div className="flex gap-3">
            <IoWallet className="md:size-8 size-5" />
            <p className="font-poppins tracking-tight text-[16px] md:text-xl font-bold">Wallet Section</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white cursor-pointer flex items-center justify-center">
            <IoSettingsOutline className="size-5" />
          </div>
        </div>

        {/* Wallet Content */}
        <div className="my-4 flex flex-col md:flex-row justify-between md:items-center gap-6">
          {/* Balance */}
          <div className="flex flex-col gap-1">
            <p className="font-poppins tracking-tight text-sm text-gray-500">Amount in Wallet</p>
            <h2 className="font-bold tracking-tight font-poppins text-3xl flex gap-1">
              ₹<CountUp start={0} end={walletConfig.walletPage.amount} duration={2} />
            </h2>
            <p className="font-poppins tracking-tight text-sm text-gray-500">Last Updated on {walletConfig.walletPage.updatedAt}</p>
          </div>

          {/* Banks */}
          <div className="flex flex-col gap-3 ">
            <Dropdown />
            <button className="py-2 px-3 bg-[#FA6E25] font-poppins text-white rounded-md">Withdraw amount</button>
          </div>
        </div>
      </div>

      {/* Total Earning & Total Withdrawal */}
      <div className="flex flex-col md:flex-row gap-6 mt-7">
        {/* Total Earning */}
        <div className="py-8 relative px-3 flex justify-between w-full bg-gradient-to-r from-[#f96e25] to-[#f89e6f] rounded-2xl">
          <div className="flex flex-col gap-3">
            <p className="font-poppins text-white tracking-tight text-lg">Total Earnings</p>
            <h2 className="font-bold text-3xl text-white tracking-tight">
              ₹<CountUp start={0} end={walletConfig.walletPage.totalEarnings} duration={2} />
            </h2>
          </div>
          <img src={Coin} alt="" className="absolute bottom-0 right-0" />

          {/* Date Select */}
          <div className="absolute top-3 right-3">
            <div className="relative bg-white rounded-md border border-gray-300 py-2 px-3 flex items-center gap-2 cursor-pointer shadow-sm">
              <select className="bg-transparent text-sm font-poppins cursor-pointer outline-none" value={selectedDateRange} onChange={(e) => setSelectedDateRange(e.target.value)}>
                {dateOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Total Withdrawal */}
        <div className="py-8 px-3 relative bg-gradient-to-r from-green-500 to-[#8bd1a5] w-full rounded-2xl">
          <div className="flex flex-col gap-3">
            <p className="font-poppins text-white tracking-tight text-lg">Total Withdrawal</p>
            <h2 className="font-bold text-3xl text-white tracking-tight">
              ₹<CountUp start={0} end={walletConfig.walletPage.totalWithDrawals} duration={2} />
            </h2>
          </div>
          <img src={Cash} alt="" className="absolute bottom-0 right-0" />

          {/* Date Select */}
          <div className="absolute top-3 right-3">
            <div className="relative bg-white rounded-md border border-gray-300 py-2 px-3 flex items-center gap-2 cursor-pointer shadow-sm">
              <select className="bg-transparent text-sm font-poppins cursor-pointer outline-none" value={selectedDateRange} onChange={(e) => setSelectedDateRange(e.target.value)}>
                {dateOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* KYC */}
      {walletConfig.walletPage.KYCStatus && (
        <div className="bg-white w-full  py-3 px-3 mt-5 rounded-xl">
        <div className="flex bg-[#eff4f5] py-3 justify-between items-center rounded-xl px-3 ">
          <div className="flex gap-3 items-center">
            <IoIosWarning className="text-[#f96e25] size-8" />
            <p className="font-poppins text-sm md:text-md tracking-tight">Your KYC is Pending complete is asap to withdraw your wallet amount!</p>
          </div>
          <button className="bg-[#f96e25] py-2 px-3 text-sm rounded-md text-white font-poppins">Update</button>
        </div>
      </div>
      )}

      {/* Chart and graphs */}
      <div className="flex md:flex-row flex-col gap-4 w-full">
        {/* Recent Withdrawal */}
        <div className="md:w-1/3 w-full bg-white py-3 px-3 mt-5 rounded-xl order-2 ">
          <div className="flex justify-between">
            <div className="flex  items-center gap-1">
              <p className="font-poppins tracking-tight">Recent Withdrawal</p>
              <MdKeyboardArrowRight className="size-5" />
            </div>
            <p className="font-poppins tracking-tight">Amount</p>
          </div>
          <div className="flex flex-col gap-6 mt-3">
            {walletConfig.walletPage.recentWithdrawals.map((withdrawal, index) => (
              <div key={index} className="flex justify-between items-center cursor-pointer">
                <a className="flex gap-3 items-center">
                  {withdrawal.status === "paid" ? (
                    <span className="w-7 h-7 bg-[#ceebd9] rounded flex items-center justify-center">
                      <FaLongArrowAltUp className="text-black" />
                    </span>
                  ) : (
                    <span className="w-7 h-7 bg-red-200 rounded flex items-center justify-center">
                      <FaLongArrowAltDown className="text-black" />
                    </span>
                  )}
                  <p>{withdrawal.date}</p>
                </a>
                {/* Amount*/}
                <p className="font-semibold font-poppins tracking-tight">₹ {withdrawal.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="md:w-2/3 w-full bg-white py-3 px-3 mt-5 rounded-xl order-2">
          <EarningsChart />
        </div>
      </div>

      {/* Transaction History */}

      <div className="bg-white mt-6 rounded-xl">
       <WalletTableComponent data={walletConfig.walletPage.allTransactions.tableData} title="All Transactions" headers={walletConfig.walletPage.allTransactions.tableHeader} page="Wallet"/>
      </div>
      {/* Base */}
    </div>
  );
};

export default WalletPage;
