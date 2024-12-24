import React from 'react';
import { Link } from 'react-router-dom';

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed h-14 w-14 text-xl right-2 top-2 bg-white flex items-center justify-center rounded-full'><i className="ri-home-line"></i></Link>
            <div className='h-1/2'>
                <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfQOuDDr8Dfz5RTx77oLAVHNIItJo1HzwFw&s" />
            </div>
            <div className="h-1/2 p-4">
                <div className='flex items-center justify-between px-3'>
                    <img className='h-14' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="ride" />
                    <div className='text-right'>
                        <h2 className='text-lg font-semibold'>Kabir</h2>
                        <h4 className='text-xl font-semibold -my-1'>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center gap-3'>
                    <div className='w-full mt-5'>
                        <div className='flex text-lg items-center gap-5 p-3 border-b-2'>
                            <i className="ri-map-pin-time-fill text-2xl"></i>
                            <div>
                                <h3 className='font-semibold text-xl'>562/11-A</h3>
                                <p className='text-gray-600 text-sm -mt-1'>Lorem, ipsum, dolor</p>
                            </div>
                        </div>
                        <div className='flex text-lg items-center gap-5 p-3'>
                            <i className="ri-currency-fill text-2xl"></i>
                            <div>
                                <h3 className='font-semibold text-xl'>PKR 193.20</h3>
                                <p className='text-gray-600 text-sm -mt-1'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full mt-5 text-white bg-green-600 font-semibold p-3 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding;