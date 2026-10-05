import axios from "axios";
 
const api = axios.create({
    baseURL: 'https://newsapi.org/v2',
    timeout : 2000, //ms
})

export default api ;