import { PiHandWithdraw } from "react-icons/pi";
import { walletConfig } from "../WalletConfig";
import { FaCog } from "react-icons/fa";
import WalletTableComponent from "../../../../../components/Table/WalletTableComponent";

const WithdrawalPage = () => {
  const { title, tableHeader, tableData } = walletConfig.allWithdrawalPage;

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <section className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <PiHandWithdraw className="text-orange-600 h-6 w-6" />
          <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
        </div>
        <FaCog className="text-gray-500 h-6 w-6 cursor-pointer hover:text-gray-700" />
      </section>

      <section>
        <WalletTableComponent title={title} headers={tableHeader} data={tableData} />
      </section>
    </div>
  );
};

export default WithdrawalPage;
