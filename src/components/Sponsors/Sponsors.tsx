import "./Sponsors.css";
// import iotalogo from "../../assets/iota_logo.png";
// import lavazzalogo from "../../assets/Lavazza-Logo.svg.png";
// import deepLinklogo from "../../assets/deeplink-Logo.jpg";
// import imsklogo from "../../assets/Imsk-Logo.png";
import ShineBorder from "../ui/shine-border";

function Sponsors() {
  const sponsorName = ["IOTA", "ENIGMA", "DEEP LINK", "LAVAZZA"];
  // const sponsorLogo = [iotalogo, deepLinklogo, lavazzalogo, imsklogo];
  return (
    <div className="py-40">
      <h1 className="text-3xl sm:text-5xl text-white font-bold text-center mb-12">
        PAST SPONSORS
      </h1>
      <section className="px-10 py-10">
        <div className="flex flex-wrap  gap-12">
          {sponsorName.map((sponsor: any) => {
            return (
              <ShineBorder
                className=" brandcard relative flex p-20 max-h-[500px] w-full md:w-1/3 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl mx-auto "
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  {sponsor}
                </span>
              </ShineBorder>
            );
          
          })}
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
