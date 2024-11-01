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
    <div className="py-32">
      <h1 className="text-3xl md:text-5xl text-white font-bold text-center">
        PAST SPONSORS
      </h1>
      <section className="px-10 py-10">
        <div className="grid md:grid-cols-4 gap-10  *:h-[13rem] md:*:h-[18rem] ">
          {sponsorName.map((sponsor: any) => {
            return (
              <ShineBorder
                className=" brandcard relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl "
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl md:text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  {sponsor}
                </span>
              </ShineBorder>
            );
            {
              /* <div className="col-span-1 flex justify-center items-center bg-gray-800 brandcard">
                        <div className="">
                            <img src={brand} alt="" className='w-48'/>
                        </div>
                    </div> */
            }
          })}
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
