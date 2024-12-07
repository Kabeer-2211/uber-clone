import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/pages/home';
import UserLogin from '../views/pages/userLogin';
import UserSignup from '../views/pages/userSignup';
import CaptainLogin from '../views/pages/captainLogin';
import CaptainSignup from '../views/pages/captainSignup';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<UserLogin />} />
            <Route path='/signup' element={<UserSignup />} />
            <Route path='/captain-login' element={<CaptainLogin />} />
            <Route path='/captain-signup' element={<CaptainSignup />} />
        </Routes>
    )
}

export default Router;