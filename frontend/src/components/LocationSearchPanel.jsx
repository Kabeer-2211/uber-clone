import React from 'react'

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanelOpen }) => {
    // sample array of locations
    const locations = ['Lorem ipsum dolor sit amet consec adipisicing elit.', 'Lorem ipsum dolor sit amet consec adipisicing elit.', 'Lorem ipsum dolor sit amet consec adipisicing elit.'];
    return (
        <div>
            {locations.map((item, i) => <div key={i} onClick={() => {
                setPanelOpen(false)
                setVehiclePanelOpen(true)
            }} className='flex items-center justify-start gap-4 my-2 border-gray-100 active:border-black border-2 p-2 rounded-xl'>
                <h2 className='bg-[#eee] text-xl rounded-full h-10 w-14 flex items-center justify-center'><i className="ri-map-pin-line"></i></h2>
                <h4 className='font-medium'>{item}</h4>
            </div>)}
        </div>
    )
}

export default LocationSearchPanel;