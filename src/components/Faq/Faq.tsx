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
    <div className="py-20 flex flex-col sm:flex-row p-4 sm:p-12 text-white gap-28">
      <div className="w-full sm:w-1/2 ">
        <h1 className="font-bold text-4xl w-full">
          Frequently Asked Questions
        </h1>
        <div className="mt-8 w-full">
          Lorem uia omnis dolorem pariatur, possimus ratione nobis voluptate
          deserunt. Iste aspernatur beatae iure ratione in dignissimos dolorum
          deserunt libero.
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <Accordion variant="bordered">
          {faqData.map((faqItem: any) => (
            <AccordionItem
              key={faqItem.id}
              aria-label={faqItem.question}
              title={faqItem.question}
            >
              {faqItem.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
