import React from 'react';
import { Link } from 'react-router-dom';

const tableData = [
  { id: 1, name: 'Product 1', revenue: 100 },
  { id: 2, name: 'Product 2', revenue: 200 },
  { id: 1, name: 'Product 1', revenue: 100 },
  { id: 2, name: 'Product 2', revenue: 200 },
  { id: 1, name: 'Product 1', revenue: 100 },
  { id: 2, name: 'Product 2', revenue: 200 },
  { id: 1, name: 'Product 1', revenue: 100 },
  { id: 2, name: 'Product 2', revenue: 200 },
  // Add more data as needed
];

function ProductTable() {
  return (
    
    <div>
     
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
  );
}

export default ProductTable;
