import "./App.css";
import MyNavbar from "./components/Navbar/MyNavbar";
import { Welcome } from "./components/Welcome/Welcome";
import Banner from "./components/Banner/Banner";
import Eventdetails from "./components/Eventdetails/Eventdetails";
import Projects from "./components/Projects/Projects";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Stats from "./components/Stats/Stats";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      <MyNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />} />
      </Routes>
    </>
  );
}

export default App;

const Home = () => {
  return (
    <div className="dark overflow-hidden">
      <div className="z-[100]">
        <Welcome />
      </div>
      <Banner />
      <Stats />
      <Eventdetails />
      <Projects />
      <Faq />
      <Footer />
    </div>
  );
};
