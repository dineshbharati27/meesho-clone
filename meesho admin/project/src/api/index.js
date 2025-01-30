import axios from 'axios';

const API_URL = 'https://api.escuelajs.co/api/v1';

export const api = {
  // Products
  getProducts: () => axios.get(`${API_URL}/products`),
  createProduct: (data) => axios.post(`${API_URL}/products`, data),
  updateProduct: (id, data) => axios.put(`${API_URL}/products/${id}`, data),
  deleteProduct: (id) => axios.delete(`${API_URL}/products/${id}`),

  // Categories
  getCategories: () => axios.get(`${API_URL}/categories`),
  createCategory: (data) => axios.post(`${API_URL}/categories`, data),
  updateCategory: (id, data) => axios.put(`${API_URL}/categories/${id}`, data),
  deleteCategory: (id) => axios.delete(`${API_URL}/categories/${id}`),

  // Users
  getUsers: () => axios.get(`${API_URL}/users`),

  // File Upload
  uploadFile: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return axios.post(`${API_URL}/files/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};