import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { BannerContinent } from '../../components/BannerContinent';
import { ContinentsInfos } from '../../components/ContinentInfos';

import { Header } from '../../components/Header';

import { api } from '../../services/api';

import { ContinentsProps } from '../../types';

interface ContinentPageProps {
  continentSelected: ContinentsProps;
}

export default function Continent({ continentSelected }: ContinentPageProps) {
  return (
    <>
      <Head>
        <title>{continentSelected.name} - WorldTrip</title>
      </Head>

      <Header isHomePage={false} />

      <BannerContinent continent={continentSelected} />

      <ContinentsInfos />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await api.get('continents');

  const continentSelected: ContinentsProps = data.find(
    (element) => element.name === params.continent
  );

  return {
    props: { continentSelected },
  };
};
