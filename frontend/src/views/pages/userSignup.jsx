import { useState } from 'react';
import useSession from '../../hooks/useSession';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const { signupUser } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const handledSubmit = async (e) => {
    e.preventDefault();
    const newUser = { fullname: { firstname, lastname }, email, password };
    await signupUser(newUser);
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  }
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div>
        <img className='w-24 ml-3' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="logo" />
        <form className='p-6' onSubmit={handledSubmit}>
          <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
          <div className='flex gap-3 mb-6'>
            <input required type="text" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-1/2 rounded-md' placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <input type="text" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-1/2 rounded-md' placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input required type="email" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-full rounded-md mb-6' placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input required type="password" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-full rounded-md' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className='bg-[#111] text-white w-full py-3 font-semibold mt-7 rounded-md'>Create Account</button>
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