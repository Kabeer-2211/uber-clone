import { createContext, useState, useEffect } from 'react';
import { signup, login, logout as userLogout } from '../services/user';
import { signup as captainSignup, login as captainLogin, logout as captainLogout } from '../services/captain';
import { getToken, setToken, deleteToken } from '../utils/user';
import { getCaptain, setCaptain, deleteCaptain } from '../utils/captain';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../utils/axios';
import useAxiosInterceptor from '../hooks/useAxiosInterceptor';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const { useInterceptor } = useAxiosInterceptor();
    useInterceptor();
    const [user, setUser] = useState();
    const [isLoadingUserData, setIsLoadingUserData] = useState(false);
    const checkCaptain = getCaptain() == 'true' ? true : false;
    const [isCaptain, setIsCaptain] = useState(checkCaptain);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const token = getToken();
    const isAuthenticated = Boolean(token);
    useEffect(() => {
        if (!token) {
            deleteToken();
            setUser(undefined);
            setIsCaptain(false);
        }
    }, [navigate, pathname, token]);
    useEffect(() => {
        const token = getToken();
        async function getUserdata() {
            try {
                setIsLoadingUserData(true);
                const response = await axios.get(`/${isCaptain ? 'captains' : 'users'}/profile`);
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
    useEffect(() => {
        if (token != null) {
            if (isCaptain) {
                setCaptain(true);
            } else {
                setCaptain(false);
            }
        }
    }, [isCaptain]);

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
    const signupCaptain = async (data) => {
        try {
            setIsLoadingUserData(true);
            const response = await captainSignup(data);
            if (response) {
                setUser(response.user);
                setToken(response.token);
                setIsCaptain(true);
                window.location.href = '/captain-home';
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoadingUserData(false);
        }
    };
    const loginCaptain = async (data) => {
        try {
            setIsLoadingUserData(true);
            const response = await captainLogin(data);
            if (response) {
                setUser(response.user);
                setToken(response.token);
                setIsCaptain(true);
                window.location.href = '/captain-home';
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoadingUserData(false);
        }
    };
    const logout = async () => {
        try {
            const response = await isCaptain ? userLogout() : captainLogout();
            if (response) {
                const logoutUrl = isCaptain ? 'captain-login' : 'login';
                setUser(undefined);
                deleteToken();
                deleteCaptain();
                setIsCaptain(false);
                window.location.href = logoutUrl;
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <UserContext.Provider value={{
            isAuthenticated,
            user,
            isLoadingUserData,
            signupUser,
            loginUser,
            logout,
            signupCaptain,
            loginCaptain,
            isCaptain,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;