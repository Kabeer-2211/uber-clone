import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSession from '../../hooks/useSession';

const CaptainLogin = () => {
  const { loginCaptain } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const captainData = {
      email,
      password,
    };
    loginCaptain(captainData);
    setEmail('');
    setPassword('');
  }
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div>
        <img className='w-24 ml-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="logo" />
        <form className='p-6' onSubmit={handleSubmit}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input required type="email" value={email} className='p-3 bg-[#eeeeee] placeholder:text-base w-full rounded-md mb-6' placeholder="email@example.com" onChange={(e) => setEmail(e.target.value)} />
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input required type="password" value={password} className='p-3 bg-[#eeeeee] placeholder:text-base w-full rounded-md' placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <button className='bg-[#111] text-white w-full py-3 font-semibold mt-7 rounded-md'>Login</button>
        </form>
        <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </div>
      <div className='p-6'>
        <Link to='/login' className='flex items-center justify-center bg-[#d5622d] text-white w-full py-3 font-semibold mt-7 rounded-md'>Signin as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin;