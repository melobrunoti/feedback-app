import axios from 'axios';

console.log('oi');
console.log(import.meta.env);

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
