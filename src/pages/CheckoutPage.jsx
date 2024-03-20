import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from "../components/Spinner";
import OrderPlace from '../components/OrderPlace';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const [useOrderPlace, setUseOrderPlace] = useState(false);

  const handleClick = () => {
    // Show spinner for 2 seconds
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      setUseOrderPlace(true);
    }, 2000); // 2 seconds
  };

  return (
    <>
      {useOrderPlace ? (
        <OrderPlace />
      ) : (
        <div className="mt-20 flex items-center justify-center">
          <div className="bg-white shadow-md rounded-md p-6 w-96">
            <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>
            <div className="space-y-4">
              <button className="bg-black text-white py-3 px-4 w-full rounded-md hover:bg-gray-800 transition duration-300" onClick={handleClick}>
                Cash On Delivery
              </button>
              <div className="bg-gray-100 py-3 px-4 rounded-md border border-gray-300">
                Phonepe - [Work in progress]
              </div>
              <div className="bg-gray-100 py-3 px-4 rounded-md border border-gray-300">
                Credit Card - [Work in progress]
              </div>
              <div className='flex justify-center'>
              {showSpinner && <Spinner />} {/* Show spinner when showSpinner is true */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
