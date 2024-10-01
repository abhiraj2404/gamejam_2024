import "./App.css";
import MyNavbar from "./components/Navbar/MyNavbar";
import { Welcome } from "./components/Welcome/Welcome";
import Banner from "./components/Banner/Banner";
import Eventdetails from "./components/Eventdetails/Eventdetails";
import Projects from "./components/Projects/Projects";
import Faq from "./components/Faq/Faq";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";
import register from './assets/register.png'
import winner from "./assets/winnerbg.png"
function App() {

  interface TimelineEntry {
    title: string;
    content: React.ReactNode;
    image: string; // Add image property
  }
  
  
  const timelineData: TimelineEntry[] = [
    {
      title: "Registration: 7th to 8th October",
      content: (
        <p>
          Register for the Global Game Jam between the 7th and 8th of October. 
          Don't miss the chance to participate in this exciting hackathon!
        </p>
      ),
      image:register
    },
    {
      title: "Hackathon Days: 11th to 13th October",
      content: (
        <p>
          The Global Game Jam will take place from 11th to 13th October. 
          You’ll have 48 hours to build and submit your game project. Work as a team or solo!
        </p>
      ),
      image:""
    },
    {
      title: "Winner Announcement: 24th October",
      content: (
        <p>
          The winners will be announced on 24th October. 
          Stay tuned to see which games stood out and earned top prizes!
        </p>
      ),
      image:winner
    },
  ];
  return (
    <>
    
      <div className="dark overflow-hidden">
        <div className="z-[100]">
          <MyNavbar />
          <Welcome />
        </div>
        <Banner />
        <Eventdetails data={timelineData} />
        <Projects />
        <Faq />
        <Sponsors />
        <Footer />
      </div>
    </>
  );
}

export default App;
