import type { NextPage } from "next";
import Head from "next/head";
import { Dummy } from "../components/componentDummy";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Srijan&apos;22</title>
        <meta name="description" content="Srijan'22 - Jadavpur University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center m-10">
        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
          Srijan&apos;22
        </h1>
        <Dummy />
      </main>
    </div>
  );
};

export default Home;
