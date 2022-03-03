import type { NextPage } from "next";
import Head from "next/head";
import { Dummy } from "../components/componentDummy";
import { Footer } from "../components/componentFooter";
import { NavBar } from "../components/componentNavbar";
import { Waitlist } from "../components/componentWaitlist";
import Emblem from "../components/logos/emblem";
import JULogo from "../components/logos/juLogo";
import SrijanLogo from "../components/logos/srijanLogo";

const Home: NextPage = () => {
  return (
    <div className="bg-primary-500 bg-logo-pattern">
      <Head>
        <title>Srijan&apos;22</title>
        <meta name="description" content="Srijan'22 - Jadavpur University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="container mx-auto">
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
