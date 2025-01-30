import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero'

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await fetch('https://api.escuelajs.co/api/v1/categories');
            const data = await response.json();
            setCategories(data);
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
        };
    
        fetchCategories();
      }, []);


  return (
    
    <div className="space-y-8 py-10">
  {/* Hero Section */}
  <section className="bg-pink-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Welcome to Meesho</h2>
          <p className="text-gray-700 text-lg mb-6">Shop the latest products at unbeatable prices!</p>
          <Link to='/products'><button className="bg-pink-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-700">Explore Now</button></Link>
        </div>
      </section>

      <Hero/>

       {/* Featured Categories */}
       <section className="py-12">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.slice(0,4).map((category, index) => (
                <Link to="/products">
              <div key={category.id} className="bg-white shadow-md rounded-lg p-4 text-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                />
                <h4 className="text-lg font-semibold text-gray-800">{category.name}</h4>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="p-2 bg-gray-200">
        <Link to='/login'>
          <div className=" w-full">
            <img
              src="https://miro.medium.com/max/1400/1*fx7ElXTQ-QZh79fs-rVX2Q.png"
              alt="Promotional Banner"
              className="mx-auto rounded-lg shadow-md"
            />
          </div>
        </Link>
      </section>
</div>
  )
}

export default Home
