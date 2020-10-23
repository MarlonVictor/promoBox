import axios from 'axios';

const getPromotions = params => axios.get('http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id', params)
const postPromotion = values => axios.post('http://localhost:5000/promotions', values)
const putPromotion = (id, values) => axios.put(`http://localhost:5000/promotions${id ? `/${id}` : ''}`, values)
const getPromotionId = id => axios.get(`http://localhost:5000/promotions/${id}`)

export { getPromotions, postPromotion, putPromotion, getPromotionId };