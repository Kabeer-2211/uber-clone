import React from 'react'

const ConfirmedRide = ({ ridePanelRef, setConfirmRidePanel, setVehicleFound }) => {
    return (
        <div ref={ridePanelRef} className='bg-white fixed w-full z-10 bottom-0 px-3 py-6 translate-y-full'>
            <h5 className='flex justify-center absolute top-0 left-44 text-3xl' onClick={() => setConfirmRidePanel(false)}>
                <i className="ri-arrow-down-s-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-3 text-center mt-4'>Confirm Your Ride</h3>
            <div className='flex flex-col justify-between items-center gap-3'>
                <img className='h-36' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="ride" />
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
                <button onClick={() => {
                    setVehicleFound(true)
                    setConfirmRidePanel(false)
                }} className='w-full bg-green-500 text-white font-semibold p-3 rounded-lg mt-5'>Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmedRide;