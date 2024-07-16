import axios from 'axios';
import { useRouter } from 'next/router';

const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
const router = useRouter();
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

export const getExampleData = async (): Promise<ExampleData[]> => {
  try {
    const response = await api.get<ExampleData[]>('/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postExampleData = async (data: ExampleData): Promise<ExampleData> => {
  try {
    const response = await api.post<ExampleData>('/data', data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
  