import http from 'axios';

http.defaults.timeout = 3600000;
http.defaults.baseURL = 'https://rawcdn.githack.com/lenconda/site_description';

export default http;
