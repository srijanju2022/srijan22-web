import { FbIcon, InstagramIcon, LinkedIcon } from "./componentIcons";
import { Waitlist } from "./componentWaitlist";
import { WaitlistForm } from "./componentWaitlistForm";
import JULogo from "./logos/juLogo";
import SrijanLogo from "./logos/srijanLogo";

export const Footer = () => {
  return (
    <footer className="bg-primary-500 z-20 bottom-0 mt-10 py-8">
      <div className="flex container mx-auto justify-between">
        <div>
          <div className="flex divide-x-2 text-white divide-secondary-500 items-center mx-auto space-x-2 container py-5">
            <JULogo />
            <SrijanLogo className="pl-4" />
          </div>
          <h3 className="text-white">
            Annual techno management fest of Jadavpur University
          </h3>
          <h3 className="text-white/50 mt-10">
            All rights reserved to F.E.T.S.U, Jadavpur University
          </h3>
        </div>
        <div className="text-white">
          <h3 className="mb-5">
            Enter email to get into waiting list for SRIJAN&apos;22
          </h3>
          <WaitlistForm />
          <div className="flex mt-8 space-x-10">
            <a href="https://www.instagram.com/srijan_ju/">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/jusrijan/">
              <FbIcon />
            </a>
            <a href="https://www.linkedin.com/company/srijan-ju">
              <LinkedIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
