import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for Tenant ID and Auth
api.interceptors.request.use((config) => {
  const tenantId = typeof window !== 'undefined' ? localStorage.getItem('tenantId') : null;
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  if (tenantId) {
    config.headers['X-Tenant-Id'] = tenantId;
  }
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Mock Interceptor logic
if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true') {
  api.interceptors.response.use(
    async (response) => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      return response;
    },
    (error) => {
      // Logic to handle mock failure/success could go here
      return Promise.reject(error);
    }
  );
}

export default api;
