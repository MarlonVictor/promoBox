import axios from 'axios';

const api = axios.get('http://localhost:5000/promotions?_embed=comments')

export default api;