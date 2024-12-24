import React, { useState, useRef } from 'react'
import 'remixicon/fonts/remixicon.css';
import FinishRide from '../components/finishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef();
    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [finishRidePanel]);
    return (
        <div className='h-screen'>
            <div className="w-screen fixed top-0 flex items-center justify-between p-3">
                <img className='w-24 ml-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="logo" />
            </div>
            <div className='h-4/5'>
                <img className="h-full w-full object-cover" src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png" />
            </div>
            <div className="h-1/5 px-4 bg-yellow-400 flex justify-between items-center relative" onClick={() => setFinishRidePanel(true)}>
                <h5 className='flex justify-center absolute top-0 left-44 text-4xl rotate-180'>
                    <i className="ri-arrow-down-s-line"></i>
                </h5>
                <h4 className='text-xl font-medium'>4KM away</h4>
                <button className='bg-green-600 text-white py-3 px-8 font-semibold rounded-lg'>Complete Ride</button>
            </div>
            <FinishRide finishRidePanelRef={finishRidePanelRef} setFinishRidePanel={setFinishRidePanel} />
        </div>
    )
}

export default CaptainRiding;