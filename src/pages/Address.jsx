import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Address = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    number: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    additionalInfo: ''
  });

  const cart = useSelector((state) => state.cart);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/address_user', {
      ...formData,
      items: cart.map(item => ({
        id: item.id,
       
        price: item.price
      }))
    })
    .then(response => {
      console.log(response.data);
      setFormData({
        fullName: '',
        number: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        additionalInfo: ''
      });
      window.location.href = "/checkout";
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="bg-gray-100 py-8 px-4 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-lg font-semibold mb-4">Enter Your Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500" required />
        </div>
        {/* Other input fields go here */}  
        <div className="mb-4">
          <label htmlFor="streetAddress" className="block mb-1">Street Address</label>
          <input type="text" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block mb-1">Phone Number</label>
          <input type="tel" id="number" name="number" value={formData.number} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="Email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block mb-1">City</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block mb-1">State/Province</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode" className="block mb-1">Postal Code</label>
          <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block mb-1">Country</label>
          <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="additionalInfo" className="block mb-1">Additional Info (Optional)</label>
          <textarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full h-20 resize-none"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 mr-2">Save Address to checkout</button>
       {/* <Link to = "/checkout" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">Continue to Checkout</Link> */}
      </form>
 
      {/* <div className='flex justify-start gap-5 bg-black text-white mt-5'>
      {/* Display cart items */}
      {/* {cart.map((item, index) => (
        <div key={index}>
          <p>ID: {item.id}</p>
          <p>Price: {item.price}</p>
          <hr />
        </div>
      ))}
      </div> 
      */} 
    </div>
  );
};

export default Address;
