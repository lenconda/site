import http from 'axios';

http.defaults.timeout = 3600000;
http.defaults.baseURL = '/';

http.interceptors.response.use((response: any) => {
  return JSON.parse(JSON.stringify(response));
});

export default http;
