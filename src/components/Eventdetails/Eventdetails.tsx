import React from 'react'
import LaptopMockup from "../../assets/LaptopMockup.png"

function Eventdetails() {
  return (
    <div className='w-full grid grid-cols-2 pt-20 pb-40'>
        <div className='col-span-1 flex justify-center items-center'>
            <img src={LaptopMockup} alt="" className='w-[60%] mx-auto py-20' />
        </div>
        <div className='col-span-1'>
            <h1 className='text-3xl font-bold text-white'>EVENT DETAILS</h1>
        </div>
    </div>
  )
}

export default Eventdetails