import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling the menu on smaller screens
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    navigate(`/products?search=${encodeURIComponent(e.target.value)}`);
  };

  return (
    <nav className="bg-pink-500 text-white p-4 z-50 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="sm:text-2xl text-xl font-bold flex items-center space-x-2">
          <span>Meesho</span>
        </Link>

        {/* Search Bar (Hidden on small screens) */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search for products..."
            className="w-full p-2 rounded-lg border border-white text-white placeholder-white tracking-wide focus:outline-none focus:ring-white"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex items-center space-x-6 ${isMenuOpen ? "flex-col absolute top-16 left-0 right-0 space-y-4 bg-pink-500 p-4 md:hidden" : "hidden md:flex"}`}>
          <Link to="/products" className="hover:text-pink-200">Categories</Link>
          <Link to="/cart" className="flex items-center hover:text-pink-200">
            Cart
            <span className="bg-red-600 text-white rounded-full px-2 ml-1 text-sm">
              {cartItems.length}
            </span>
          </Link>
          <Link to="/orders" className="hover:text-pink-200">My Orders</Link>

          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to='/profile'><span className='font-semibold'>Profile</span></Link>
              <button
                onClick={() => dispatch(logout())}
                className="bg-white text-pink-500 px-4 py-1 rounded-lg hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-white text-pink-500 px-4 py-1 rounded-lg hover:bg-gray-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;