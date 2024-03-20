import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* User Management Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">User Management</h3>
          <p>View and manage users.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 transition duration-300">View Users</button>
        </div>
        {/* Product Management Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Product Management</h3>
          <p>View and manage products.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 transition duration-300">View Products</button>
        </div>
        {/* Order Management Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Order Management</h3>
          <p className='mb-3'>View and manage orders.</p>
          <Link to= "/order" className=" bg-blue-500 text-white px-4 py-2 rounded-md  hover:bg-blue-600 transition duration-300">View Orders</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
