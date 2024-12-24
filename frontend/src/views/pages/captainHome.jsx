import { useState, useRef } from "react";
import useSession from "../../hooks/useSession";
import CaptainDetail from '../components/captainDetail';
import RidePopup from "../components/ridePopup";
import ConfirmRidePopup from "../components/confirmRidePopup";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainHome = () => {
  const { logout } = useSession();
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const ridePopupPanelRef = useRef();
  const [confirmRidePopup, setConfirmRidePopup] = useState(false);
  const confirmRidePopupRef = useRef();
  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)'
      });
      gsap.to(ridePopupPanelRef.current, {
        opacity: 1
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      });
      gsap.to(ridePopupPanelRef.current, {
        opacity: 0
      });
    }
  }, [ridePopupPanel]);
  useGSAP(function () {
    if (confirmRidePopup) {
      gsap.to(confirmRidePopupRef.current, {
        transform: 'translateY(0)'
      });
    } else {
      gsap.to(confirmRidePopupRef.current, {
        transform: 'translateY(100%)'
      });
    }
  }, [confirmRidePopup]);

  return (
    <div className='h-screen'>
      <div className="w-screen fixed top-0 flex items-center justify-between p-3">
        <img className='w-24 ml-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="logo" />
        <div className='h-12 w-12 text-xl bg-white flex items-center justify-center rounded-full mb-5' onClick={logout}><i className="ri-logout-box-r-line"></i></div>
      </div>
      <div className='h-3/5'>
        <img className="h-full w-full object-cover" src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png" />
      </div>
      <div className="h-2/5 p-4">
        <CaptainDetail />
      </div>
      <RidePopup ridePopupPanelRef={ridePopupPanelRef} setRidePopupPanel={setRidePopupPanel} setConfirmRidePopup={setConfirmRidePopup} />
      <ConfirmRidePopup confirmRidePopupRef={confirmRidePopupRef} setConfirmRidePopup={setConfirmRidePopup} />
    </div>
  )
}

export default CaptainHome;