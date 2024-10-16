import axiosInstance from "../common/ultils/interceptor";
import binanceConfig from "../common/config/binance";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: binanceConfig?.apiURL }) =>
  async ({ url, method, data, params, headers, body }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          ...headers,
          "X-MBX-APIKEY": "API_KEY",
        },
        body,
      });
      return Promise.resolve(result);
    } catch (axiosError) {
      // Should return in this format only, becasuse in order to populate error from axios interceptor "return response.data"
      return Promise.reject(axiosError?.response?.data); 
    }
  };

export default axiosBaseQuery;