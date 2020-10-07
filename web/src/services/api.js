import axios from 'axios';

const api = params => axios.get('http://localhost:5000/promotions?_embed=comments', params);

export default api;