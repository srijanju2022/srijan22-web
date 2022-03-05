import type { NextPage } from "next";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { Footer } from "../components/componentFooter";
import { NavBar } from "../components/componentNavbar";
import { Waitlist } from "../components/componentWaitlist";

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
        <ToastContainer />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
