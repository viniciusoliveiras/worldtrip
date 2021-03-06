import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { BannerContinent } from '../../components/BannerContinent';
import { CitiesPlus100 } from '../../components/CitiesPlus100';
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

      <ContinentsInfos
        bio={continentSelected.bio}
        coutriesCount={continentSelected.coutriesCount}
        languagesAmount={continentSelected.languagesAmount}
        cities100={continentSelected.cities100}
      />

      <CitiesPlus100 citiesToShow={continentSelected.citiesToShow} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await api.get('continents');

  const paths = continents.data.map((continent) => ({
    params: { continent: continent.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await api.get('continents');

  const continentSelected: ContinentsProps = data.find(
    (element) => element.name === params.continent
  );

  return {
    props: { continentSelected },
    revalidate: 60 * 60 * 24 * 2, //2 days
  };
};
