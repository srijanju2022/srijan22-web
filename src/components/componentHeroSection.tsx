import Emblem from "./logos/emblem";

export const HeroSection = () => {
  return (
    <section className="flex container h-[90vh] items-center  justify-between">
      <div>
        <h1 className="text-white capitalize font-bold text-6xl">
          SRIJAN&apos;22
        </h1>
        <p className="text-white font-bold text-2xl my-3">14th to 18th April</p>
        <p className="text-white font-bold text-xl my-10">
          Yes, We are here! But please wait...
          <br /> Will you? enter waiting list
        </p>
        <form className="space-x-3 flex">
          <input
            className="bg-primary-500 w-full border-2 text-white px-2 py-1"
            placeholder="Email"
          />
          <button className="bg-white text-primary-500 font-bold px-4 py-2">
            Send
          </button>
        </form>

        <p className="text-white font-bold text-md mt-20">
          Scroll down to know a secret*
        </p>
      </div>
      <Emblem className="hidden md:flex" />
    </section>
  );
};
