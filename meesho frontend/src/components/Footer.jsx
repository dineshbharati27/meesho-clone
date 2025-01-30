import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Shop Non-Stop */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-pink-500">Shop Non-Stop</h3>
        <div className="space-y-2">
          <p className="text-gray-400">Trusted by more than 1 Crore Indians</p>
          <p className="text-gray-400">Cash on Delivery | Free Delivery</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-pink-500">
              <span className="sr-only">Play Store</span>
              {/* Add Play Store icon */}
            </a>
            <a href="#" className="text-white hover:text-pink-500">
              <span className="sr-only">App Store</span>
              {/* Add App Store icon */}
            </a>
          </div>
        </div>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-pink-500">Company</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/about" className="text-gray-400 hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/careers" className="text-gray-400 hover:text-white">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/terms" className="text-gray-400 hover:text-white">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      {/* Help */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-pink-500">Help</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/faq" className="text-gray-400 hover:text-white">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/shipping" className="text-gray-400 hover:text-white">
              Shipping
            </Link>
          </li>
          <li>
            <Link to="/cancellation" className="text-gray-400 hover:text-white">
              Cancellation
            </Link>
          </li>
          <li>
            <Link to="/returns" className="text-gray-400 hover:text-white">
              Returns
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-pink-500">Contact Us</h3>
        <ul className="space-y-2">
          <li className="text-gray-400">Email: help@meesho.com</li>
          <li className="text-gray-400">Phone: 1-800-123-4567</li>
          <li className="text-gray-400">Address: Bangalore, Karnataka, India</li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-12 pt-8 border-t border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2024 Meesho. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Facebook</span>
            {/* Add Facebook icon */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Instagram</span>
            {/* Add Instagram icon */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Twitter</span>
            {/* Add Twitter icon */}
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>


  );
};

export default Footer;