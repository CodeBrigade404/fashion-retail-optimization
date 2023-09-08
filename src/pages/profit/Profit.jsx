import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const Profit = () => {
  // Sample table data
  const tableData = [
    { id: 1, name: "Product A", revenue: 5000 },
    { id: 2, name: "Product B", revenue: 7500 },
    { id: 3, name: "Product C", revenue: 10000 },
    { id: 4, name: "Product D", revenue: 3000 },
    { id: 5, name: "Product E", revenue: 6000 },
    { id: 1, name: "Product A", revenue: 5000 },
    { id: 2, name: "Product B", revenue: 7500 },
    { id: 3, name: "Product C", revenue: 10000 },
    { id: 4, name: "Product D", revenue: 3000 },
    { id: 5, name: "Product E", revenue: 6000 },
    { id: 1, name: "Product A", revenue: 5000 },
    { id: 2, name: "Product B", revenue: 7500 },
    { id: 3, name: "Product C", revenue: 10000 },
    { id: 4, name: "Product D", revenue: 3000 },
    { id: 5, name: "Product E", revenue: 6000 },
  ];

  return (
    <div className="py-8 px-4 sm:px-8 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 leading-tight cursor-pointer">
            PROFIT PREDICTION
          </h1>
          <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
            Export
          </button>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 gap-6 mt-8\">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <h2 className="text-xl font-semibold text-blue-900">
              Profit Prediction (Monthly)
            </h2>
            <h1 className="text-3xl font-bold text-blue-700 mt-4">
              Rs. 100,000
            </h1>
            <FaRegCalendarMinus className="text-4xl mt-4 text-blue-600" />
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <h2 className="text-xl font-semibold text-blue-900">
              No. of Products
            </h2>
            <h1 className="text-3xl font-bold text-blue-700 mt-4">
              100,000
            </h1>
          </div>
          
        </div>
      </div>

      <div className="container mx-auto mt-8 p-4 border border-gray-300 rounded-lg max-h-[400px] overflow-y-auto">
        <div className="table-wrapper">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left px-6 py-3 bg-gray-200">ID</th>
                <th className="text-left px-6 py-3 bg-gray-200">Product Name</th>
                <th className="text-left px-6 py-3 bg-gray-200">Revenue</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="table-scroll">
          <table className="min-w-full">
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td className="text-left px-6 py-3">
                    <Link to={`/product/${item.id}`}>{item.id}</Link>
                  </td>
                  <td className="text-left px-6 py-3">
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </td>
                  <td className="text-left px-6 py-3">
                    <Link to={`/product/${item.id}`}>Rs. {item.revenue}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profit;
