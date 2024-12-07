import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      email,
      password,
    });
    setEmail('');
    setPassword('');
  }
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div>
        <img className='w-24 ml-3' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="logo" />
        <form className='p-6' onSubmit={handleSubmit}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input required type="email" value={email} className='p-3 bg-[#eeeeee] placeholder:text-base w-full rounded-md mb-6' placeholder="email@example.com" onChange={(e) => setEmail(e.target.value)} />
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input required type="password" value={password} className='p-3 bg-[#eeeeee] placeholder:text-base w-full rounded-md' placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <button className='bg-[#111] text-white w-full py-3 font-semibold mt-7 rounded-md'>Login</button>
        </form>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new account</Link></p>
      </div>
      <div className='p-6'>
        <Link to='/captain-login' className='flex items-center justify-center bg-[#10b461] text-white w-full py-3 font-semibold mt-7 rounded-md'>Signin as captain</Link>
      </div>
    </div>
  )
}

export default UserLogin;