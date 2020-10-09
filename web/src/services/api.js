import axios from 'axios';

const getPromotions = params => axios.get('http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id', params)
const postPromotion = values => axios.post('http://localhost:5000/promotions', values)

export { getPromotions, postPromotion };