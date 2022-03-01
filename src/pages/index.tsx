import type { NextPage } from "next";
import Head from "next/head";
import { Dummy } from "../components/componentDummy";
import Emblem from "../components/logos/emblem";
import JULogo from "../components/logos/juLogo";
import SrijanLogo from "../components/logos/srijanLogo";

const Home: NextPage = () => {
  return (
    <div className="bg-primary-500 bg-logo-pattern h-[100vh]">
      <Head>
        <title>Srijan&apos;22</title>
        <meta name="description" content="Srijan'22 - Jadavpur University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex divide-x-2 divide-secondary-500 items-center space-x-2 px-20  py-5">
        <JULogo />
        <SrijanLogo className="pl-4" />
      </nav>
      <main className="px-20">
        <section className="flex container items-center justify-between">
          <div>
            <h1 className="text-white capitalize font-bold text-6xl">
              SRIJAN&apos;22
            </h1>
            <p className="text-white font-bold text-2xl my-3">
              14th to 18th April
            </p>
            <p className="text-white font-bold text-xl my-10">
              Yes, We are here! But please wait...
              <br /> Will you? enter waiting list
            </p>
            <form className="space-x-3 flex">
              <input
                className="bg-transparent w-full border-2 text-white px-2 py-1"
                placeholder="Email"
              />
              <button className="bg-white text-primary-500 font-bold px-4 py-2">
                Send
              </button>
            </form>
          </div>
          <Emblem />
        </section>
      </main>
    </div>
  );
};

export default Home;
