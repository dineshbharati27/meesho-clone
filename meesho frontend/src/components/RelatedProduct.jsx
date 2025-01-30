import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchProducts } from '../redux/productSlice';
import { addToCart } from '../redux/cartSlice';

const RelatedProduct = ({ selectedProduct }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items: products, status, error } = useSelector((state) => state.products);
  
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchProducts());
      }
    }, [dispatch, status]);
  
    // Log products data to ensure they are correctly fetched
    console.log('Fetched Products:', products);
  
    // Filter related products based on the selected product's category
    const filterProduct = products.filter(
      (product) => product.category.id === selectedProduct.category.id
    );

    const handleAddToCart = (product) => {
        if (!isAuthenticated) {
            navigate('/login');
            return; 
        }
        dispatch(addToCart(product));
    };
  
    const getFirstImage = (images) => images.length > 0 ? images[0] : 'default-image-url.jpg';
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-100">
        {status === 'loading' && <p>Loading...</p>}
        {error && <p className="text-red-500">Error loading products: {error}</p>}
        
        {filterProduct.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden border hover:shadow-md transition-transform transform hover:scale-105"
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
    );
};
  

export default RelatedProduct;
