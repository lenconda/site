import http from 'axios';

http.defaults.timeout = 3600000;
http.defaults.baseURL = 'https://raw.githubusercontent.com/lenconda/site_description/master';

export default http;
