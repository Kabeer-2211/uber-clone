import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='bg-[url(https://images.unsplash.com/photo-1578849054561-9270509838ef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center h-screen pt-8 w-full flex flex-col justify-between'>
        <img className='w-24 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="logo" />
        <div className='bg-white pb-7 pt-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
    </div>
  )
}

export default Start;