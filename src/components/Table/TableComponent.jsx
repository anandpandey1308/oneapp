/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { Search, Filter, SortAsc, Mail, ChevronRight } from 'lucide-react';
import { toast } from 'react-toastify';
import Pagination from '@mui/material/Pagination';

const Table = ({ data }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const handleRowClick = (path) => {
    console.log(path);
    
    if (path) {
      navigate(path);
    }
  };

  const handleExport = async () => {
    toast.info('Starting export...', {
      position: "top-right",
      autoClose: 1000,
    });
    
    setTimeout(() => {
      toast.success('Export sent to your email!', {
        position: "top-right",
        autoClose: 5000,
      });
    }, 2000);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = useMemo(() => {
    return data.filter(event => 
      event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.price?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.sale?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.revenue?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, page]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div className="space-y-4 w-full px-4 sm:px-6 lg:px-8">
      {/* Search and Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg border">
        <div className="flex-1 min-w-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-9 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filter</span>
          </button>
          
          <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700">
            <SortAsc className="h-4 w-4" />
            <span className="hidden sm:inline">Sort</span>
          </button>
          
          <button 
            onClick={handleExport}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y-0 divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sale</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y-0 divide-gray-200">
            {paginatedData.map((event, index) => (
              <tr 
                key={index}
                onClick={() => handleRowClick(event.path)}
                className="cursor-pointer transform transition-all duration-200 hover:scale-[1.02] mb-3"
              >
                <td className="bg-white border rounded-l-lg px-4 py-4 text-sm">
                  <div className="font-medium text-gray-900">{event.title}</div>
                </td>
                <td className="bg-white border-t border-b px-4 py-4 text-sm text-gray-500">
                  {event.price}
                </td>
                <td className="bg-white border-t border-b px-4 py-4 text-sm text-gray-500">
                  {event.sale}
                </td>
                <td className="bg-white border-t border-b px-4 py-4 text-sm text-gray-500">
                  {event.revenue}
                </td>
                <td className="bg-white border rounded-r-lg px-4 py-4 text-sm">
                  {event.paymentEnabled ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Enabled
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Disabled
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {paginatedData.map((event, index) => (
          <div
            key={index}
            onClick={() => handleRowClick(event.path)}
            className="bg-white rounded-lg border p-4 cursor-pointer hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900">{event.title}</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-500">Price:</span>
                <span className="ml-2 font-medium">{event.price}</span>
              </div>
              <div>
                <span className="text-gray-500">Sale:</span>
                <span className="ml-2 font-medium">{event.sale}</span>
              </div>
              <div>
                <span className="text-gray-500">Revenue:</span>
                <span className="ml-2 font-medium">{event.revenue}</span>
              </div>
              <div>
                <span className="text-gray-500">Payment:</span>
                <span className="ml-2">
                  {event.paymentEnabled ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Enabled
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Disabled
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Pagination 
          count={Math.ceil(filteredData.length / itemsPerPage)} 
          page={page} 
          onChange={handleChangePage} 
          size="small"
          sx={{
            '& .MuiPaginationItem-root': {
              backgroundColor: 'rgb(212 212 212)', 
              color: '#fff', 
              '&:hover': {
                backgroundColor: 'rgb(234, 88, 12)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgb(234, 88, 12)', 
                color: '#fff',
              },
            },
          }}  
        />
      </div>
    </div>
  );
};

export default Table;