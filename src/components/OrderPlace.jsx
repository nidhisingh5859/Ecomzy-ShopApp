import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from "react-router-dom"

const OrderPlace = () => {
  const [showMessage, setShowMessage] = useState(true);

  // Animate the message
  const messageSpring = useSpring({
    opacity: showMessage ? 1 : 0,
    transform: showMessage ? 'translateY(0)' : 'translateY(-100%)',
  });

  // Hide the message after a delay
  setTimeout(() => {
    setShowMessage(false);
  }, 3000); // Hide message after 3 seconds

  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Order Placed Successfully!</h2>
        <div className="space-y-4">
          <p className="text-lg font-semibold mb-5">Thank you for your order.</p>
         
          <div className='flex flex-col gap-2 justify-center'> <Link to="/" className="bg-red-600 text-white py-3 px-4 w-full rounded-md hover:bg-red-700 transition duration-300">
            Go Back to Home
          </Link>
          <Link to="/service" className="bg-red-600 text-white py-3 px-4 w-full rounded-md hover:bg-red-700 transition duration-300">
            Your Order
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlace;
