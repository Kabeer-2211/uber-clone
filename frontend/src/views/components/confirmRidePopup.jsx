import { useState } from 'react';
import { Link } from 'react-router-dom';

const ConfirmRidePopup = ({ confirmRidePopupRef, setConfirmRidePopup }) => {
    const [otp, setOtp] = useState('');
    const handleSubmit = (e) => { }

    return (
        <div ref={confirmRidePopupRef} className='fixed w-full h-screen translate-y-full z-10 bottom-0 bg-white px-3'>
            <h5 className='flex justify-center absolute top-0 left-44 text-3xl' onClick={() => setConfirmRidePopup(false)}>
                <i className="ri-arrow-down-s-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-3 text-center mt-8'>Confirm this Ride to Start</h3>
            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
                <div className='flex items-center gap-4'>
                    <img className="h-12 w-12 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="user" />
                    <h2 className='text-xl'>Kabir Ahmad</h2>
                </div>
                <div className='text-xl font-semibold'>2.2KM</div>
            </div>
            <div className='flex flex-col justify-between items-center gap-3'>
                <div className='w-full mt-5'>
                    <div className='flex text-lg items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-fill text-2xl"></i>
                        <div>
                            <h3 className='font-semibold text-xl'>562/11-A</h3>
                            <p className='text-gray-600 text-sm -mt-1'>Lorem, ipsum, dolor</p>
                        </div>
                    </div>
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
                <form className='flex flex-col justify-center gap-2 w-full px-4' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter OTP' className='bg-[#eee] px-8 py-3 rounded-lg text-lg mt-5 mb-3' value={otp} onChange={(e) => setOtp(e.target.value)} />
                    <div className='flex items-center justify-center gap-4'>
                        <Link to='/captain-riding' className='bg-green-500 text-center text-white font-semibold p-3 rounded-lg'>Confirm Ride</Link>
                        <button onClick={() => setConfirmRidePopup(false)} className='bg-red-500 text-white font-semibold p-3 rounded-lg'>Cancel Ride</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ConfirmRidePopup;