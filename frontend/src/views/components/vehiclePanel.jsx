import React from 'react'

const VehiclePanel = ({ vehiclePanelRef, vehiclePanelRefClose, setVehiclePanelOpen, setConfirmRidePanel }) => {
    return (
        <div ref={vehiclePanelRef} className='bg-white fixed w-full z-10 bottom-0 px-3 py-6 translate-y-full'>
            <h5 ref={vehiclePanelRefClose} className='flex justify-center absolute top-0 left-44 text-3xl' onClick={() => setVehiclePanelOpen(false)}>
                <i className="ri-arrow-down-s-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h3>
            <div onClick={() => {
                setConfirmRidePanel(true)
                setVehiclePanelOpen(false)
            }} className='border-2 active:border-black border-gray-200 rounded-xl w-full flex items-center justify-between p-3 mb-3'>
                <img className='w-16' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="ride" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-line"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-sm'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>200.20 Rs</h2>
            </div>
            <div onClick={() => {
                setConfirmRidePanel(true)
                setVehiclePanelOpen(false)
            }} className='border-2 active:border-black border-gray-200 rounded-xl w-full flex items-center justify-between p-3 mb-3'>
                <img className='w-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="ride" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-line"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-sm'>Affordable motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>85 Rs</h2>
            </div>
            <div onClick={() => {
                setConfirmRidePanel(true)
                setVehiclePanelOpen(false)
            }} className='border-2 active:border-black border-gray-200 rounded-xl w-full flex items-center justify-between p-3 mb-3'>
                <img className='w-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="ride" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-lg'>UberAuto <span><i className="ri-user-line"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-sm'>Affordable Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>123.45 Rs</h2>
            </div>
        </div>
    )
}

export default VehiclePanel;