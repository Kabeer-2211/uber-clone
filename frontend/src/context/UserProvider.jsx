import { createContext, useState, useEffect } from 'react';
import { signup, login } from '../services/user';
import { getToken, setToken, deleteToken } from '../utils/user';
import { logout } from '../services/user';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../utils/axios';
import useAxiosInterceptor from '../hooks/useAxiosInterceptor';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const { useInterceptor } = useAxiosInterceptor();
    useInterceptor();
    const [user, setUser] = useState();
    const [isLoadingUserData, setIsLoadingUserData] = useState(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const token = getToken();
    const isAuthenticated = Boolean(token);
    useEffect(() => {
        if (!token) {
            deleteToken();
            setUser(undefined);
        }
    }, [navigate, pathname, token]);
    useEffect(() => {
        const token = getToken();
        async function getUserdata() {
            try {
                setIsLoadingUserData(true);
                const response = await axios.get("/users/profile");
                if (response) {
                    setUser(response);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoadingUserData(false);
            }
        }
        if (token) {
            getUserdata();
        }
    }, []);
    const signupUser = async (data) => {
        try {
            setIsLoadingUserData(true);
            const response = await signup(data);
            if (response) {
                setUser(response.user);
                setToken(response.token);
                window.location.href = '/home';
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoadingUserData(false);
        }
    };
    const loginUser = async (data) => {
        try {
            setIsLoadingUserData(true);
            const response = await login(data);
            if (response) {
                console.log(response)
                setUser(response.user);
                setToken(response.token);
                window.location.href = '/home';
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoadingUserData(false);
        }
    };
    const logoutUser = async () => {
        try {
            const response = await logout();
            if (response) {
                setUser(undefined);
                deleteToken();
                window.location.href = '/login';
            }
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <UserContext.Provider value={{
            isAuthenticated,
            user,
            isLoadingUserData,
            signupUser,
            loginUser,
            logoutUser,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;