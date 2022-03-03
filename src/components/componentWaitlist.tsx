import { Footer } from "./componentFooter";
import { FootFall } from "./componentFootfall";
import { HeroSection } from "./componentHeroSection";
import { PastSponsor } from "./componentPastSponsor";
import Emblem from "./logos/emblem";

export const Waitlist = () => {
  return (
    <>
      <section>
        <HeroSection />;
      </section>
      <section>
        <FootFall />
      </section>
      <section>
        <PastSponsor />
      </section>
    </>
  );
};
