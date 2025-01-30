import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../redux/productSlice';
import { addToCart } from '../redux/cartSlice';
import RelatedProduct from '../components/RelatedProduct';
import Title from '../components/Title';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedProduct } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return; 
    }
    if (selectedProduct) {
      dispatch(addToCart(selectedProduct));
    }
  };

  if (!selectedProduct) return <div className="text-center py-10">Loading...</div>;

  return (
  <div>
    <div className="container mx-auto p-20 pt-10 rounded-lg">
    <Link to="/products">
      <button className="px-4 py-2 mb-4 bg-white text-pink-500 font-semibold rounded-lg shadow-md hover:bg-pink-600 hover:text-white transition duration-300">
        Back
      </button>
    </Link>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="flex flex-col">
          <img
            src={Array.isArray(selectedProduct.images) ? selectedProduct.images[0] : selectedProduct.images}
            alt={selectedProduct.title}
            className="w-full rounded-lg shadow-md border border-gray-200"
          />
          <div className="mt-4 grid grid-cols-3 gap-2">
          {Array.isArray(selectedProduct.images) &&
            selectedProduct.images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${selectedProduct.title} ${index + 2}`}
                className="w-full h-24 object-cover rounded-lg border border-gray-200 hover:shadow-md transition-transform transform hover:scale-105"
              />
          ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{selectedProduct.title}</h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">{selectedProduct.description}</p>

          {/* Price */}
          <div className="mb-4">
            <span className="text-3xl font-semibold text-pink-600">₹{selectedProduct.price}</span>
            <span className="ml-3 text-sm line-through text-gray-500">₹{selectedProduct.price + 500}</span>
            <span className="ml-2 text-sm text-green-600">(500 Off)</span>
          </div>

          {/* Category */}
          <div className="mb-6">
            <strong className="text-gray-700">Category:</strong> <span className="text-gray-800">{selectedProduct.category.name}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-pink-500 text-white text-lg px-6 py-3 rounded-md shadow-md hover:bg-pink-600 transition-colors"
            >
              Add to Cart
            </button>
            {/* <button
              className="bg-gray-200 text-gray-800 text-lg px-6 py-3 rounded-md shadow-md hover:bg-gray-300 transition-colors"
            >
              Buy Now
            </button> */}
          </div>
        </div>
      </div>
    </div>

    <div className='text-2xl pb-10'>
      <Title text1="Related" text2="Products" className=""/>
      <RelatedProduct selectedProduct={selectedProduct}/>
    </div>
  </div>

  );
};

export default ProductDetail;