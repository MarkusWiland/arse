import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FAQ = [
  {
    value: "1",
    question: "Vilka bord har Arsenal Göteborg?",
    answer:
      "Där det hänger flaggor bakom samt där det står små skyltar på borden. Fråga om du är osäker.",
  },
  {
    value: "2",
    question: "Jag har hört att det är bra med Arsenalsånger är det alltid så?",
    answer:
      "Nej, Allt som oftast är det bra tryck på sångerna men spelar vi dåligt eller får ett baklängesmål efter 1 minut så är det sparsamt med sång.",
  },
  {
    value: "3",
    question: "Får jag ta med mig en eller två polare?",
    answer:
      "Går alldeles utmärkt om man anmäler sig och dessa är Arsenalfans. I övrigt gäller det som står ovan här under allmäna tips.",
  },
  {
    value: "4",
    question:
      "Vi är tre Gooners som inte visste om att vi kunde komma förrän 30min innan kickoff,  kan vi dyka upp?",
    answer:
      "Absolut, finns det plats så löser vi det annars får man hänga i baren eller ställa sig någonstans",
  },
  {
    value: "5",

    question: "Vilka matcher ser ni på Cheers?",
    answer: "Alla matcher, oftast även alla försäsongs matcher.",
  },
];

export function AccordionDemo() {
  return (
    <Accordion type="multiple"  className="w-full">
      {FAQ.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="text-black"
        >
          <AccordionTrigger className="text-black">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-black">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
