import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSession from '../../hooks/useSession';

const CaptainSignup = () => {
  const { signupCaptain } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [color, setColor] = useState('');
  const [plate, setPlate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const handledSubmit = (e) => {
    e.preventDefault();
    const newCaptain = { fullname: { firstname, lastname }, email, password, vehicle: { color, plate, capacity, vehicleType } };
    signupCaptain(newCaptain);
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
    setColor('');
    setPlate('');
    setCapacity('');
    setVehicleType('');
  }
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div>
        <img className='w-24 ml-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="logo" />
        <form className='p-6' onSubmit={handledSubmit}>
          <h3 className='text-lg font-medium mb-2'>What's our captain's email</h3>
          <div className='flex gap-3 mb-6'>
            <input required type="text" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-1/2 rounded-md' placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <input type="text" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-1/2 rounded-md' placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's our captain's email</h3>
          <input required type="email" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-full rounded-md mb-6' placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input required type="password" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-full rounded-md mb-6' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <h3 className='text-lg font-medium mb-2'>Enter Vehicle Info</h3>
          <div className='flex gap-3 mb-4'>
            <input required type="text" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-1/2 rounded-md' placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)} />
            <input required type="text" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-1/2 rounded-md' placeholder="Plate" value={plate} onChange={(e) => setPlate(e.target.value)} />
          </div>
          <div className='flex gap-3'>
            <input required type="number" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-1/2 rounded-md' placeholder="Capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
            <input required type="text" className='p-3 bg-[#eeeeee] placeholder:text-base text-lg w-1/2 rounded-md' placeholder="Vehicle Type" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} />
          </div>
          <button className='bg-[#111] text-white w-full py-3 font-semibold mt-7 rounded-md'>Create Account</button>
        </form>
        <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div className='p-6'>
        <p className='text-[10px] leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci ad praesentium sit cum ratione.</p>
      </div>
    </div>
  )
}

export default CaptainSignup;