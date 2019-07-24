import axios from 'axios';


const token = localStorage.getItem('token');

const id = localStorage.getItem('id');

axios.defaults.baseURL = "https://webdev-api.loftschool.com";


axios.defaults.headers["Authorization"] = `Bearer ${token}`;

export default axios;