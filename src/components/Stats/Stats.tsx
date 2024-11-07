import NumberTicker from "../ui/number-ticker";

function Stats() {
  return (
    <div className="mx-auto pt-12 px-4 md:pr-8 md:pl-0 lg:pr-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl mb-7 font-bold text-black dark:text-white text-center w-[60%]">
        Global Gam Jam
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base px-1 max-w-4xl text-center ">
        Join developers, designers, and creators from around the world in this
        epic hackathon! Over the course of two thrilling days, participants will
        collaborate to build innovative, creative, and engaging games from
        scratch.
      </p>
      {/* stats section  */}
      <section className="">
        <div className="max-w-screen-xl px-4 py-8 pb-24 lg:pb-0 mx-auto text-center lg:pt-20">
          <dl className="grid max-w-screen-md gap-8 md:gap-32 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            <div className="flex flex-col items-center justify-center">
              <dt className=" whitespace-pre-wrap tracking-tighter  mb-2  text-3xl md:text-4xl font-extrabold">
                <NumberTicker value={132} />+
              </dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Countries
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className=" whitespace-pre-wrap tracking-tighter  mb-2 text-3xl md:text-4xl font-extrabold">
                <NumberTicker value={439} />
                K+
              </dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Jammers
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className=" whitespace-pre-wrap tracking-tighter  mb-2 text-3xl md:text-4xl font-extrabold">
                {" "}
                <NumberTicker value={89} />
                K+
              </dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Games
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}

export default Stats;
