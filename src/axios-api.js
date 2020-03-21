import axios from 'axios';
import { API_URL, ID_TOKEN } from "./constants";

const api = axios.create({ baseURL: API_URL });

api.interceptors.request.use(response => {
  const token = localStorage.getItem(ID_TOKEN);

  if (token != null) {
    response.headers.Authorization = `bearer ${token}`;
  }
  return response;
});

api.interceptors.response.use(res => res, err => {
  const { statusText } = err.response;
  const { pathname } = window.location;
  const paths = ['/login', '/registration', '/create'];
  const canRedirect = !paths.some(p => pathname.includes(p));

  if (canRedirect && statusText === 'Unauthorized') {
    window.location.pathname = 'login';
  }

  return Promise.reject(err);
});

export default api;
