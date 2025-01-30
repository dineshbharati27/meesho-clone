import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './redux/store';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import store from './redux/Store';
import Home from './pages/Home';
import Footer from './components/Footer';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className=''>
      <Navbar />
        <div className="px-4 sm:[5vw] md:px-[7vw] lg:px[9vw] min-h-screen bg-gray-100">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route 
              path="/cart" 
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/orders" 
              element={
                <PrivateRoute>
                  <Orders />
                </PrivateRoute>
              } 
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      <Footer/>
      </div>
      </Router>
    </Provider>
  );
}

export default App;