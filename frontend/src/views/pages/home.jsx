import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../../components/LocationSearchPanel';
import VehiclePanel from '../components/vehiclePanel';
import ConfirmedRide from '../components/confirmedRide';
import LookingForDriver from '../components/lookingForDriver';
import WaitingForDriver from '../components/waitingForDriver';
const Home = () => {
  const [pickUp, setPickUp] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef();
  const panelCloseRef = useRef();
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef();
  const vehiclePanelRefClose = useRef();
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const ridePanelRef = useRef();
  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef();
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef();
  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%'
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%'
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0
      });
    }
  }, [panelOpen]);
  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      });
      gsap.to(vehiclePanelRefClose.current, {
        opacity: 1
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      });
      gsap.to(vehiclePanelRefClose.current, {
        opacity: 0
      });
    }
  }, [vehiclePanelOpen]);
  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(ridePanelRef.current, {
        transform: 'translateY(0)'
      });
    } else {
      gsap.to(ridePanelRef.current, {
        transform: 'translateY(100%)'
      });
    }
  }, [confirmRidePanel]);
  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      });
    }
  }, [vehicleFound]);
  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      });
    }
  }, [waitingForDriver]);
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='h-screen relative'>
      <img className='w-28 absolute left-5 top-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="logo" />
      <div className='w-screen h-screen'>
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfQOuDDr8Dfz5RTx77oLAVHNIItJo1HzwFw&s" />
      </div>
      <div className='h-screen flex flex-col justify-end absolute top-0 w-full'>
        <div className='h-[30%] bg-white p-6 relative'>
          <h5 ref={panelCloseRef} className='absolute top-3 right-3 text-2xl' onClick={() => setPanelOpen(false)}>
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a Trip</h4>
          <form onSubmit={handleSubmit} className='relative'>
            <div className='absolute top-1/3 rounded-full left-5 bg-gray-700 h-2/4 w-1'></div>
            <input className='bg-[#eee] px-12 py-2 rounded-lg text-lg w-full mt-5 mb-3' type="text" placeholder="Add a Pickup Location" value={pickUp} onChange={(e) => setPickUp(e.target.value)} onClick={() => setPanelOpen(true)} />
            <input className='bg-[#eee] px-12 py-2 rounded-lg text-lg w-full' type="text" placeholder="Enter your Destination" value={destination} onChange={(e) => setDestination(e.target.value)} onClick={() => setPanelOpen(true)} />
          </form>
        </div>
        <div className='w-full bg-white px-5 overflow-hidden' ref={panelRef}>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} vehiclePanelRef={vehiclePanelRef} vehiclePanelRefClose={vehiclePanelRefClose} setVehiclePanelOpen={setVehiclePanelOpen} />
      <ConfirmedRide setVehicleFound={setVehicleFound} ridePanelRef={ridePanelRef} setConfirmRidePanel={setConfirmRidePanel} />
      <LookingForDriver setVehicleFound={setVehicleFound} vehicleFoundRef={vehicleFoundRef} />
      <WaitingForDriver waitingForDriverRef={waitingForDriverRef} setWaitingForDriver={setWaitingForDriver} />
    </div>
  )
}

export default Home;