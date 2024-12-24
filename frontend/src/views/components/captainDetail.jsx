import React from 'react'

const CaptainDetail = () => {
    return (
        <div>
            <div className="flex justify-between items-center p-3">
                <div className="flex items-center justify-start gap-2">
                    <img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="driver" />
                    <h4 className="text-lg font-medium">Kabir Ahmad</h4>
                </div>
                <div>
                    <h4 className="text-lg font-semibold">PKR 235.75</h4>
                    <p className="text-sm text-gray-600">Earned</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5 mt-5 bg-gray-100 rounded-xl p-5 mx-3">
                <div className="text-center">
                    <i className="text-3xl ri-time-line"></i>
                    <h5 className="my-2 text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours Online</p>
                </div>
                <div className="text-center">
                    <i className="text-3xl ri-speed-up-line"></i>
                    <h5 className="my-2 text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours Online</p>
                </div>
                <div className="text-center">
                    <i className="text-3xl ri-booklet-line"></i>
                    <h5 className="my-2 text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetail;