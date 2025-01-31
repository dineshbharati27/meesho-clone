import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { fetchProducts } from '../redux/productSlice';
import { addToCart } from '../redux/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const useQuery = () => new URLSearchParams(useLocation().search);

  // const searchParams = new URLSearchParams(location.search);
  // const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  

  const getFirstImage = (images) => {
    let parsedImages;
    // Check if the first image is a string that looks like a JSON array
    try {
      parsedImages = JSON.parse(images[0]); // This parses the first image if it's a JSON string
      if (!Array.isArray(parsedImages)) {
        parsedImages = [images[0]]; // If it's not an array, treat it as a single element
      }
    } catch (error) {
      // If JSON.parse fails, treat it as a single element
      parsedImages = images;
    }
    return parsedImages[0]; // Return the first image in the array
  };
  

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories');

        setCategories(response.data);
      } catch (err) {
        console.error('Failed to fetch categories', err);
      }
    };

    // Fetch products
    if (status === 'idle') {
      dispatch(fetchProducts());
    }

    fetchCategories();
  }, [status, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const query = useQuery().get("search") || "";

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !query ||
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase());
  
    const matchesCategory =
      !selectedCategory || product.category.id === selectedCategory;
  
    return matchesSearch && matchesCategory; // Ensure both filters are applied
  });
  

  if (status === 'loading') return <div className="text-center py-10">Loading...</div>;
  if (status === 'failed') return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* left side */}
      <div className="mb-6 min-w-60">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={!selectedCategory}
              onChange={() => setSelectedCategory(null)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded w-full text-xl text-left bg-gray-200'}`}
            >
              All Categories
            </button>
          </div>
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategory === category.id}
                onChange={() => setSelectedCategory(category.id)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <button
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded w-full text-xl text-left bg-gray-200'}`}
              >
                {category.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* right side */}
    <div>
      {filteredProducts.length === 0 ? (
        <div className="text-center py-10 text-gray-600">
          No products found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 p-4 bg-gray-100">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden border hover:shadow-md transition-transform transform hover:scale-105 w-full lg:min-w-[250px]"
            >
              <Link to={`/product/${product.id}`} className="block">
                <img 
                  src={getFirstImage(product.images)} 
                  alt={product.title} 
                  className="w-full h-52 object-cover"
                />
              </Link>
              <div className="p-3">
                <h2 className="text-base font-medium mb-1 truncate">{product.title}</h2>
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-pink-500 font-semibold">${product.price}</span>
                  <span className="text-gray-400">{product.category.name}</span>
                </div>
                <div className="flex justify-between">
                  <Link 
                    to={`/product/${product.id}`} 
                    className="text-blue-600 text-sm hover:underline"
                  >
                    View Details
                  </Link>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-pink-500 text-white text-sm px-3 py-1 rounded hover:bg-pink-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default ProductList;