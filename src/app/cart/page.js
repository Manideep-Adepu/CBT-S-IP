"use client";

import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../CartContext';
import Loader from '../products/loader';
import Image from 'next/image';

const ShoppingCart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, removeFromCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);
  const [address, setAddress] = useState({
    doorNumber: '',
    street: '',
    city: '',
    pincode: ''
  });
  const electronicImg = '/electronicImg.png';
  
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const handleBuyNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddressChange = (field, value) => {
    setAddress(prevAddress => ({
      ...prevAddress,
      [field]: value
    }));
  };

  const handleProceed = () => {
    // Handle the proceed action with the updated address
    console.log('Updated Address:', address);
    handleCloseModal();
  };

  const cartTotal = cart.length > 0
    ? cart.reduce((total, item) => total + item.basePrice * item.quantity, 0).toFixed(2)
    : '0.00';

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 && <p className="text-gray-600">The cart is empty.</p>}
      {cart.map(item => (
        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="flex p-4">
            <Image src={item.imageUrl || electronicImg} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-600">Product Category: {item.productCategory}</p>
              <p className="text-gray-600">Price: ${item.basePrice.toFixed(2)}</p>
              <p className="text-gray-600">Description: {item.description}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 mt-2"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="mt-4 p-4 bg-gray-100 border-t border-gray-300 flex justify-between items-center">
          <h3 className="text-xl font-bold">
            Total: ${cartTotal}
          </h3>
          <button
            onClick={handleBuyNowClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Buy Now
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Review Your Order</h3>
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">Total Cost: ${cartTotal}</h4>
              <h4 className="text-xl font-semibold mb-2">Products:</h4>
              <ul className="list-disc pl-5">
                {cart.map(item => (
                  <li key={item.id} className="text-gray-700">{item.name}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4 p-4 border rounded-lg bg-gray-100">
              <h4 className="text-xl font-semibold mb-2">Shipping Address</h4>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">Door Number:</label>
                <input
                  type="text"
                  value={address.doorNumber}
                  onChange={(e) => handleAddressChange('doorNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">Street:</label>
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) => handleAddressChange('street', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">City:</label>
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => handleAddressChange('city', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">Pincode:</label>
                <input
                  type="text"
                  value={address.pincode}
                  onChange={(e) => handleAddressChange('pincode', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleProceed}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
