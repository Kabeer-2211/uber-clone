import React from 'react'

const WaitingForDriver = ({ waitingForDriverRef, setWaitingForDriver }) => {
  return (
    <div ref={waitingForDriverRef} className='bg-white fixed w-full z-10 bottom-0 px-3 py-6 translate-y-full'>
      <h5 className='flex justify-center absolute top-0 left-44 text-3xl' onClick={() => setWaitingForDriver(false)}>
        <i className="ri-arrow-down-s-line"></i>
      </h5>
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
      </div>
    </div>
  )
}

export default WaitingForDriver;