import type { NextPage } from "next";
import Head from "next/head";
import { Dummy } from "../components/componentDummy";
import { Waitlist } from "../components/componentWaitlist";
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
      <nav className="flex divide-x-2 divide-secondary-500 items-center mx-auto space-x-2 container py-5">
        <JULogo />
        <SrijanLogo className="pl-4" />
      </nav>
      <main className="container mx-auto">
        <Waitlist />
      </main>
    </div>
  );
};

export default Home;
