import Image from "next/image";
import MatchDayEvent from "@/assets/matchdayevent.jpg";
import React from "react";
import { AccordionDemo } from "../_components/Accordion";

export default function MatchTraffar() {
  return (
    <section className="py-[72px] sm:py-24">
      <div className="container  mx-auto max-w-5xl">
        <h1 className="text-6xl tracking-tighter font-medium text-center">
          Matchträffar
        </h1>
        <p className="text-lg tracking-tight font-light mt-6 ">
          Vi kör något som vi kallar matchträffar varje Arsenal match. Själva
          ordet ”matchträff” förklarar sig rätt så bra själv tycker vi. Vi
          samlas alltså varje Arsenal match på vår hemmapub Cheers Pub som
          ligger på Viktoriagatan 10. Vilka är då välkoma? Alla Arsenal fans är
          välkomna. Vi kräver heller inget medlemskap i Arsenal Göteborg för att
          komma på våra matchträffar men i stort sett alla väljer att betala den
          hundralappen det kostar för att bli medlem i Arsenal Göteborg och får
          då en hel del förmåner. Kommer man till Cheers tre -fyra ggr per år,
          så betalar sig medlemskapet enbart med de rabatter och andra event som
          vi kör på Cheers. Utöver detta så har vi andra förmåner. Detta kan du
          läsa om under medlemskap i menyn. Nedan så har vi gjort en liten guide
          över vad som kan vara bra att tänka på om man vill komma på en
          matchträff och bli en del av Arsenal Göteborgs familjen, det finns
          också en lite FAQ. Vi brukar också säga att efter tre till fem
          matchträffar så kommer det kännas som du alltid varit med oss och
          kollat på världens vackraste lag, Arsenal Football Club.
        </p>
        <h2 className="text-4xl tracking-tighter font-medium mt-6">
          Lite allmänna Tips
        </h2>
        <ul className="mt-6 list-disc space-y-2 ">
          <li>Alla Arsenal Fans är välkomna</li>
          <li>
            Det är alltid bra att anmäla sig i god tid om man vet med sig att
            man kan komma.
          </li>
          <li>
            Till stormatcher eller övriga matcher där det kan bli knökfullt så
            har betalande medlemmar förtur
          </li>
          <li>
            Om du har anmält dig (e-post längst ner på sidan) så ordnar vi en
            plats (Vi finns också på Facebook)
          </li>
          <li>
            Skulle du inte vara medlem och det är fullt så finns det alltid 10
            ej bokningsbara platser i baren
          </li>
          <li>Var i god tid, gärna en timme före kickoff</li>
          <li>
            Gå gärna in i det innersta rummet och eventuella andra bord och
            presentera dig för andra gooners
          </li>
          <li>
            Är du där i väldigt god tid så slipper du gå runt och hälsa, folk
            kommer och hälsar på dig istället.
          </li>
          <li>
            Det går utmärkt att bara dyka upp men då får man räkna med att man
            kan få stå eller försöka få plats i baren.
          </li>
          <li>
            Är man inte medlem så gäller alltså alltid regeln, stol vid mån av
            plats. Oftast löser det sig men man ska vara medveten om detta.
          </li>
          <li>
            Är du sen till Cheers, be någon hålla din plats. Kommer du vid
            kickoff så kan platsen vara ”släppt”.
          </li>
          <li>
            Är det fullt så var som en hök i baren då många kommer in och tar
            ett par öl och sedan går.
          </li>
          <li>
            Ge det 3-5ggr och du kommer få se att det känns som du alltid varit
            med Arsenal Göteborgs gemenskap och vår goa familj.
          </li>
        </ul>
        <div className="mt-6 flex items-center justify-center">
          <Image
            className=" rounded-xl shadow-lg "
            src={MatchDayEvent}
            alt="Match Dag Event"
            width={800}
            height={500}
          />
        </div>
        <div className="mt-12">
          <h1 className="text-3xl font-medium tracking-tighter mb-2"> FAQ</h1>
          <AccordionDemo />
        </div>
      </div>
    </section>
  );
}
