import Head from 'next/head';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { CallToAction } from '../components/CallToAction';
import { Continents } from '../components/Continents';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - World Trip</title>
      </Head>

      <Header />
      <Banner />
      <TravelTypes />
      <CallToAction />
      <Continents />
    </>
  );
}
