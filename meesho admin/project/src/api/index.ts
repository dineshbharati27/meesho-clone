import axios from 'axios';

const API_URL = 'https://api.escuelajs.co/api/v1';

export const api = {
  // Products
  getProducts: () => axios.get(`${API_URL}/products`),
  createProduct: (data: any) => axios.post(`${API_URL}/products`, data),
  updateProduct: (id: number, data: any) => axios.put(`${API_URL}/products/${id}`, data),
  deleteProduct: (id: number) => axios.delete(`${API_URL}/products/${id}`),

  // Categories
  getCategories: () => axios.get(`${API_URL}/categories`),
  createCategory: (data: any) => axios.post(`${API_URL}/categories`, data),
  updateCategory: (id: number, data: any) => axios.put(`${API_URL}/categories/${id}`, data),
  deleteCategory: (id: number) => axios.delete(`${API_URL}/categories/${id}`),

  // Users
  getUsers: () => axios.get(`${API_URL}/users`),

  // File Upload
  uploadFile: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return axios.post(`${API_URL}/files/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};