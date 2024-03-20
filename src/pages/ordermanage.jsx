import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderManage = () => {
  const [users, setUsers] = useState([]);
  const [receivedOrders, setReceivedOrders] = useState(new Set());

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users'); // Updated API endpoint URL
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleClick = (orderId) => {
    const updatedReceivedOrders = new Set(receivedOrders);
    if (receivedOrders.has(orderId)) {
      updatedReceivedOrders.delete(orderId);
    } else {
      updatedReceivedOrders.add(orderId);
    }
    setReceivedOrders(updatedReceivedOrders);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Item ID</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Number</th>
            <th className="px-4 py-2">Street Address</th>
            <th className="px-4 py-2">Postal Code</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2 text-red-500">Manage</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="border px-4 py-2">{user.orderId}</td>
              <td className="border px-4 py-2">{user.itemId.join(", ")}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.number}</td>
              <td className="border px-4 py-2">{user.streetAddress}</td>
              <td className="border px-4 py-2">{user.postalCode}</td>
              <td className="border px-4 py-2">{user.itemPrice.join(", $")}</td>
              <td className="border px-4 py-2">
                <button className="hover:text-red-300" onClick={() => handleClick(user.orderId)}>
                  {receivedOrders.has(user.orderId) ? "Received" : "Click to receive"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManage;
