import axios from "../utils/axios";

export const signup = async (data) => await axios.post('/captains/register', data);
export const login = async (data) => await axios.post('/captains/login', data);
export const logout = async () => await axios.get('/captains/logout');
