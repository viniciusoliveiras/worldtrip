import Head from 'next/head';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelType';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - World Trip</title>
      </Head>

      <Header />
      <Banner />
      <TravelTypes />
    </>
  );
}
