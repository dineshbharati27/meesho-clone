import React, { useState, useEffect } from 'react';
import { api } from '../api';
import toast from 'react-hot-toast';

export const AddPage = () => {
  const [activeTab, setActiveTab] = useState('product');
  const [categories, setCategories] = useState([]);
  const [productForm, setProductForm] = useState({
    title: '',
    price: '',
    description: '',
    categoryId: '',
    images: ['https://picsum.photos/640/480']
  });
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    image: 'https://picsum.photos/640/480'
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.getCategories();
        setCategories(response.data);
      } catch (error) {
        toast.error('Failed to fetch categories');
      }
    };
    fetchCategories();
  }, []);

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createProduct({
        ...productForm,
        price: Number(productForm.price),
        categoryId: Number(productForm.categoryId)
      });
      toast.success('Product created successfully');
      setProductForm({
        title: '',
        price: '',
        description: '',
        categoryId: '',
        images: ['https://picsum.photos/640/480']
      });
    } catch (error) {
      toast.error('Failed to create product');
    }
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createCategory(categoryForm);
      toast.success('Category created successfully');
      setCategoryForm({
        name: '',
        image: 'https://picsum.photos/640/480'
      });
    } catch (error) {
      toast.error('Failed to create category');
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('product')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'product'
                ? 'border-pink-500 text-pink-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Add Product
          </button>
          <button
            onClick={() => setActiveTab('category')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'category'
                ? 'border-pink-500 text-pink-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Add Category
          </button>
        </nav>
      </div>

      {activeTab === 'product' ? (
        <form onSubmit={handleProductSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={productForm.title}
              onChange={(e) => setProductForm({ ...productForm, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              value={productForm.price}
              onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={productForm.description}
              onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              value={productForm.categoryId}
              onChange={(e) => setProductForm({ ...productForm, categoryId: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Create Product
          </button>
        </form>
      ) : (
        <form onSubmit={handleCategorySubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={categoryForm.name}
              onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Create Category
          </button>
        </form>
      )}
    </div>
  );
};