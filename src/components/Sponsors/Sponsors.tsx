import React from 'react'
import "./Sponsors.css"
import iotalogo from "../../assets/iota_logo.png"
import lavazzalogo from "../../assets/Lavazza-Logo.svg.png"
import deepLinklogo from "../../assets/deeplink-Logo.jpg"
import imsklogo from "../../assets/Imsk-Logo.png"

function Sponsors() {
  return (
    <div className='py-40'>
        <h1 className='text-5xl text-white font-bold text-center'>SPONSORS</h1>
        <section className=" py-10">
        <div className="grid grid-cols-4 *:h-[20rem] *:border-y-1 *:border-r-1 *:border-white">
                <div className="col-span-1 flex justify-center items-center bg-gray-800">
                    <div className="">
                        <img src={iotalogo} alt="" className='w-48'/>
                    </div>
                </div>
                <div className="col-span-1  flex justify-center items-center">
                    <div className="">
                        <img src={deepLinklogo} alt="" className='w-48'/>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center items-center bg-gray-800">
                    <div className="">
                        <img src={imsklogo} alt="" className='w-48'/>
                    </div>
                </div>
                <div className="col-span-1  flex justify-center items-center">
                    <div className="">
                        <img src={lavazzalogo} alt="" className='w-48' />
                    </div>
                </div>
                
            </div>
            </section>
    </div>
  )
}

export default Sponsors