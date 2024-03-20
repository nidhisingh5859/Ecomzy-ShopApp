import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const ServiceDashboard = () => {
  const [email, setEmail] = useState('');
  const [orders, setOrders] = useState([]);
  const [searching, setSearching] = useState(false);
  const [noOrders, setNoOrders] = useState(false);

  const handleSearch = async () => {
    setSearching(true);
    try {
      const response = await axios.get(`http://localhost:4000/user_orders/${email}`);
      setOrders(response.data.orders);
      if (response.data.orders.length === 0) {
        setNoOrders(true);
      }
    } catch (error) {
      console.error('Error fetching user orders:', error);
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Please Insert Your Email to Get Your Required order information</h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSearch}
            className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            {searching ? 'Searching...' : 'Search Orders'}
          </button>
        </div>
        {noOrders ? (
          <p className="text-red-500">No orders found for this email</p>
        ) : null}
        {orders.length > 0 && !searching && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">User Orders</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Full Name</th>
                  <th className="px-4 py-2 border">Order ID</th>
                  <th className="px-4 py-2 border">Item ID</th>
                  <th className="px-4 py-2 border">Item Price</th>
                  <th className="px-4 py-2 border">Street Address</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td className="px-4 py-2 border">{order.fullName}</td>
                    <td className="px-4 py-2 border">{order.orderId}</td>
                    <td className="px-4 py-2 border">{order.itemId.join(', ')}</td>
                    <td className="px-4 py-2 border">{order.itemPrice.join(', ')}</td>
                    <td className="px-4 py-2 border">{order.streetAddress}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-blue-500 mt-6 text-center">Thanks for choosing Ecomzy</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDashboard;
