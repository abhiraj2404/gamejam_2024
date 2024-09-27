import "./Banner.css";
import { NeonGradientCard } from "../magicui/neon-gradient-card";
import BannerImage from "../../assets/Banner.jpg";
import { useEffect, useState } from "react";
import Tilty from "react-tilty";

function Banner() {
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    // This function will be triggered when the page and all resources have finished loading
    const handleLoad = () => {
      console.log("Page has fully loaded, including all resources.");
      // You can perform any action here
    };

    setTimeout(() => {
      setcounter(counter + 1);
    }, 1000);
    // Attach the event listener for when the window finishes loading
    window.addEventListener("load", handleLoad);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="banner-super py-40 px-60">
      <Tilty reverse={true} max={4}>
        <NeonGradientCard className="">
          {/* <img src={BannerImage} alt="" className=" rounded-3xl"/> */}
          <div className="rounded-3xl p-4 banner_div">
            <img src={BannerImage} alt="" className=" rounded-3xl" />
          </div>
          {/* <h1 className="text-5xl">Hello world</h1> */}
        </NeonGradientCard>
      </Tilty>
    </div>
  );
}

export default Banner;
