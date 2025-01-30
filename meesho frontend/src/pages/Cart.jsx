import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart, clearCart } from '../redux/cartSlice';
import { addToOrder } from '../redux/orderSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleCheckout = () => {
    dispatch(addToOrder({items, total}))
    dispatch(clearCart())
    navigate('/orders')
    // alert('Checkout functionality to be implemented');
  };

  return (
    <div className="mx-auto p-4 pt-6">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">My Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">Your cart is empty</p>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="md:col-span-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-gradient-to-r from-gray-50 via-white to-gray-50 p-6 mb-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-28 h-28 object-cover mr-6 rounded-lg border border-gray-200"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                  <p className="text-gray-500 text-sm mb-3">${item.price.toFixed(2)}</p>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100 text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="text-red-500 hover:text-red-600 font-medium ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 font-semibold shadow-md transition-colors"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary Section */}
          <div className=" p-6 rounded-2xl  h-fit">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex text-lg justify-between text-gray-900">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex text-lg justify-between text-gray-900">
                <span>Tax (10%)</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex text-lg justify-between font-bold text-gray-800 border-t pt-3">
                <span>Total</span>
                <span>${(total * 1.1).toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-green-500 text-lg text-white py-3 rounded-lg font-semibold hover:bg-green-600 shadow-md transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>

      )}
    </div>
  );
};

export default Cart;