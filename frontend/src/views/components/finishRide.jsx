import React from 'react';
import { Link } from 'react-router-dom';

const FinishRide = ({ finishRidePanelRef, setFinishRidePanel }) => {
    return (
        <div ref={finishRidePanelRef} className='fixed w-full translate-y-full z-10 bottom-0 bg-white px-3'>
            <h5 className='flex justify-center absolute top-0 left-44 text-3xl' onClick={() => setFinishRidePanel(false)}>
                <i className="ri-arrow-down-s-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-3 text-center mt-8'>Finish this Ride</h3>
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
                <Link to='/captain-home' className='bg-green-500 w-full text-center text-white font-semibold p-3 rounded-lg mb-4 mt-20'>Finish Ride</Link>
            </div>
        </div>
    )
}

export default FinishRide;