import Spline from "@splinetool/react-spline";
import "./Welcome.css";

export const Welcome = () => {
  return (
    <div id="Home" className="welcome-super flex flex-col gap-3 lg:grid lg:grid-cols-10">
      <Spline
        scene="https://prod.spline.design/85yhB2pcbHnpgbyu/scene.splinecode"
        className="z-10 lg:col-span-5"
      />

     
      <div className="welcome-inner z-10 lg:col-span-5 dark">
        <Spline scene="https://prod.spline.design/23vIrvSDo-ZotEEX/scene.splinecode" className="w-full h-[80vh]" />
      </div>
    </div>
  );
};
