"use client";

import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import ContactMe from "../components/contactme";
import WhatsAppButton from "../components/whatsappbutton";
import BackToTheTopButton from "../components/backtotopbutton";
import PracticeAreas from "../components/practiceareas";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />

        <AboutUs />

        <PracticeAreas />

        <ContactMe />

        <WhatsAppButton phoneNumber="+1234567890" />

        <BackToTheTopButton />
      </main>
    </div>
  );
}
