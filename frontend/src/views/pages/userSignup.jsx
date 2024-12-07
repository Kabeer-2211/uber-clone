import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('second');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});
  const handledSubmit = (e) => {
    e.preventDefault();
    setUserData({ userName: { firstName, lastName }, email, password });
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div>
        <img className='w-24 ml-3' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="logo" />
        <form className='p-6' onSubmit={handledSubmit}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <div className='flex gap-3 mb-6'>
            <input required type="text" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-1/2 rounded-md' placeholder="Firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-1/2 rounded-md' placeholder="Lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input required type="email" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-full rounded-md mb-6' placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input required type="password" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-full rounded-md' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className='bg-[#111] text-white w-full py-3 font-semibold mt-7 rounded-md'>Signup</button>
        </form>
        <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div className='p-6'>
        <p className='text-[10px] leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sint ea repellendus aspernatur illo, iste similique blanditiis, id unde quidem totam, quasi cum neque accusantium.</p>
      </div>
    </div>
  )
}

export default UserSignup;