import { FootFall } from "./componentFootfall";
import { HeroSection } from "./componentHeroSection";
import { PastSponsor } from "./componentPastSponsor";
import { WhoAreWe } from "./componentWhoAreWe";
export const Waitlist = () => {
  return (
    <>
      <section>
        <HeroSection />;
      </section>
      <section>
        <WhoAreWe />
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
