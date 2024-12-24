import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from '../views/pages/start';
import Home from '../views/pages/home';
import CaptainHome from '../views/pages/captainHome';
import UserLogin from '../views/pages/userLogin';
import UserSignup from '../views/pages/userSignup';
import CaptainLogin from '../views/pages/captainLogin';
import CaptainSignup from '../views/pages/captainSignup';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import PrivateCaptainRoute from './PrivateCaptainRoute';
import Riding from '../views/pages/riding';
import CaptainRiding from '../views/pages/captainRiding';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={
                <PublicRoute>
                    <Start />
                </PublicRoute>
            } />
            <Route path='/home' element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            <Route path='/riding' element={
                <PrivateRoute>
                    <Riding />
                </PrivateRoute>
            } />
            <Route path='/captain-home' element={
                <PrivateCaptainRoute>
                    <CaptainHome />
                </PrivateCaptainRoute>
            } />
            <Route path='/login' element={
                <PublicRoute>
                    <UserLogin />
                </PublicRoute>
            } />
            <Route path='/signup' element={
                <PublicRoute>
                    <UserSignup />
                </PublicRoute>
            } />
            <Route path='/captain-login' element={
                <PublicRoute>
                    <CaptainLogin />
                </PublicRoute>
            } />
            <Route path='/captain-signup' element={
                <PublicRoute>
                    <CaptainSignup />
                </PublicRoute>
            } />
            <Route path='/captain-riding' element={
                <PrivateCaptainRoute>
                    <CaptainRiding />
                </PrivateCaptainRoute>
            } />
        </Routes>
    )
}

export default Router;