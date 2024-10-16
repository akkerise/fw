// axiosInstance.js
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
    // Add any other headers or configurations you need
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config here, e.g., add authentication headers
    // config.headers.Authorization = `Bearer ${getToken()}`;
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response?.data,
  (error) => Promise.reject(error)
);

export default axiosInstance;