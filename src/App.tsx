import { useState } from 'react'
import BlurIn from './components/magicui/blur-in'
import FlickeringGrid from './components/magicui/flickering-grid'
import './App.css'
import MyNavbar from './components/Navbar/MyNavbar'
import { Welcome } from './components/Welcome/Welcome'
import Banner from './components/Banner/Banner'
import Eventdetails from './components/Eventdetails/Eventdetails'
import Projects from './components/Projects/Projects'
import Faq from './components/Faq/Faq'
import Sponsors from './components/Sponsors/Sponsors'


function App() {

  return (
    <>
    {/* <Spline
    className='absolute inset-0 z-[0]'
    
    scene="https://prod.spline.design/23vIrvSDo-ZotEEX/scene.splinecode" 
      /> */}


    {/* <FlickeringGrid
        className=" absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        
        // height={975}
        // width={975}
      /> */}


     <div className='dark'>
      <div className='z-[100]'>
          <MyNavbar/>
          <Welcome />
     </div>
      <Banner />
      <Eventdetails />
      <Projects />
      <Faq />
      <Sponsors />
    </div>
     
    </>
  )
}

export default App
