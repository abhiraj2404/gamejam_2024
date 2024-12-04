import { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { baseUrl, faqsEndpoint } from "../../../api";

function Faq() {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the internet
    console.log(baseUrl + faqsEndpoint);
    fetch(baseUrl + faqsEndpoint)
      .then((response) => response.json())
      .then((data) => setFaqData(data))
      .catch((error) => console.error("Error fetching FAQ data:", error));
  }, []);

  return (
    <div
      id="FAQs"
      className="relative py-28 w-[100vw] -mx-[calc((100vw-100%)/2)] text-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(147,51,234,0.03)_0%,_transparent_50%)]" />
      <div className="absolute top-1/2 -right-64 w-96 h-96 bg-purple-500/10 rounded-full blur-[160px] -translate-y-1/2 mix-blend-soft-light" />
      <div className="absolute top-1/2 -left-64 w-96 h-96 bg-purple-400/10 rounded-full blur-[160px] -translate-y-1/2 mix-blend-soft-light" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left column */}
          <div className="flex-1 max-w-xl">
            <div className="sticky top-28">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                Everything you need to know about the Global Game Jam 2025. Can't find the answer you're looking for? Feel free to reach out to our team.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors">
                <span className="text-sm font-medium">Contact Support</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1">
            <Accordion 
              variant="shadow"
              className="gap-4 bg-transparent focus:outline-none"
              itemClasses={{
                base: "group bg-black/20 hover:bg-black/30 backdrop-blur-xl rounded-2xl mb-4 border border-white/5 transition-all duration-200 focus:outline-none",
                title: "font-medium text-white/90 focus:outline-none",
                trigger: "px-6 py-5 data-[hover=true]:text-white focus:outline-none",
                content: "px-6 pb-6 text-white/70",
                indicator: "text-white/30 transition-transform -rotate-90 data-[open=true]:rotate-90"
              }}
            >
              {faqData.map((faqItem: any) => (
                <AccordionItem
                  key={faqItem.id}
                  aria-label={faqItem.question}
                  className="focus:outline-none"
                  title={
                    <div className="flex items-center gap-3 group-data-[hover=true]:translate-x-1 transition-transform duration-200">
                      <div className="flex-1 text-base md:text-lg">{faqItem.question}</div>
                    </div>
                  }
                >
                  <p className="text-base leading-relaxed">
                    {faqItem.answer}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
