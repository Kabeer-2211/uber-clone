import axios from "../utils/axios";

export const signup = async (data) => await axios.post('/users/register', data);
export const login = async (data) => await axios.post('/users/login', data);
export const logout = async () => await axios.get('/users/logout');
