import { WaitlistForm } from "./componentWaitlistForm";
import Emblem from "./logos/emblem";

export const HeroSection = () => {
  return (
    <section className="flex container text-white  h-[100vh]  items-center justify-between">
      <div className="mx-auto md:mx-0">
        <h1 className=" capitalize font-bold text-7xl">SRIJAN&apos;22</h1>
        <p className="font-bold text-2xl my-3">14th to 18th April</p>
        <p className="font-bold text-xl my-10">
          Yes, We are here! But please wait...
          <br /> Will you? enter waiting list
        </p>
        <WaitlistForm />
        <p className="font-bold text-md mt-20">Scroll down to know a secret*</p>
      </div>
      <Emblem className="hidden md:flex mt-20" />
    </section>
  );
};
