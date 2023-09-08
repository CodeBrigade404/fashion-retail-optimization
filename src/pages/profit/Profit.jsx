import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Barchart from '/src/pages/profit/Barchart.jsx';

const Profit = () => {
  // Sample table data
  const tableData = [
    { id: 1, name: "Product A", revenue: 5000 },
    { id: 2, name: "Product B", revenue: 7500 },
    { id: 3, name: "Product C", revenue: 10000 },
    { id: 4, name: "Product D", revenue: 3000 },
    { id: 5, name: "Product E", revenue: 6000 },
    // ... (repeated data)
  ];

  return (
    <div className="py-8 px-4 sm:px-8 bg-white">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 leading-tight cursor-pointer">
          PROFIT PREDICTION
        </h1>

        {/* Grid for Cards */}
        <div className="grid md:grid-cols-3 ">
          {/* Card 1: Profit Prediction */}
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <h2 className="text-xl font-semibold text-blue-900">
              Profit Prediction (Monthly)
            </h2>
            <h1 className="text-3xl font-bold text-blue-700 mt-4">
              Rs. 100,000
            </h1>
            <FaRegCalendarMinus className="text-4xl mt-4 text-blue-600" />
          </div>

          {/* Card 2: No. of Products */}
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <h2 className="text-xl font-semibold text-blue-900">
              No. of Products
            </h2>
            <h1 className="text-3xl font-bold text-blue-700 mt-4">
              100,000
            </h1>
          </div>

          {/* Card 3: No. of Products */}
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <h2 className="text-xl font-semibold text-blue-900">
              No. of Products
            </h2>
            <h1 className="text-3xl font-bold text-blue-700 mt-4">
              100,000
            </h1>
          </div>
        </div>

        {/* Table */}
        <div className="flex mt-5">
          {/* Chart 1 */}
          <div className="w-1/4 bg-white rounded-lg p-6 text-center shadow-md">
            <Barchart />
          </div>

          {/* Chart 2 */}
          <div className="w-1/4 bg-white rounded-lg p-6 text-center shadow-md">
            <Barchart />
          </div>

          {/* Table */}
          <div className="w-1/2 bg-white rounded-lg shadow-lg p-4">
            <div className="container mx-auto mt-4 p-2 border border-gray-300 rounded-lg max-h-[300px] overflow-y-auto">
              <div className="table-wrapper">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left px-6 py-3 bg-gray-200">ID</th>
                      <th className="text-left px-6 py-3 bg-gray-200">
                        Product Name
                      </th>
                      <th className="text-left px-6 py-3 bg-gray-200">
                        Revenue
                      </th>
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
                          <Link to={`/product/${item.id}`}>
                            Rs. {item.revenue}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5">
        <h1>1</h1>
        </div>
    </div>
  );
};

export default Profit;
