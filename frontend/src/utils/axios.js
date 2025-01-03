import axiosRaw from 'axios';

const BASE_URL = 'http://127.0.0.1:4000';

const axios = axiosRaw.create({
    baseURL: BASE_URL,
})

export default axios;