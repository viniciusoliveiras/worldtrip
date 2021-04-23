import Head from 'next/head';

import { Header } from '../components/Header';
import { BannerHome } from '../components/BannerHome';
import { TravelTypes } from '../components/TravelTypes';
import { CallToAction } from '../components/CallToAction';
import { Continents } from '../components/Continents';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - World Trip</title>
      </Head>

      <Header isHomePage={true} />

      <BannerHome />

      <TravelTypes />

      <CallToAction />

      <Continents />
    </>
  );
}
