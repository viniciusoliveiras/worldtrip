import { Flex, Text, Image, Box, Grid } from '@chakra-ui/react';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { url } from 'node:inspector';

SwiperCore.use([Navigation, Pagination]);

interface ContinentsProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

export function Continents() {
  const [continents, setContinents] = useState<ContinentsProps[]>([]);

  useEffect(() => {
    api.get<ContinentsProps[]>('continents').then((response) => {
      setContinents(response.data);
    });
  }, []);

  console.log(continents);
  return (
    <Flex mx='auto' mt='14' mb='10' maxWidth='1240px'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Flex
              width='100%'
              height={[178, 238, 450]}
              bgImage={`url('${continent.image}')`}
              bgRepeat='no-repeat'
              bgPosition='100% 30%'
              bgSize='cover'
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
              style={{ boxShadow: 'inset 0 0 0 50vw rgba(0,0,0,0.5)' }}
            >
              <Text
                fontWeight='bold'
                fontSize={{ lg: '4xl', xl: '5xl' }}
                color='gray.50'
                textAlign='center'
                align='center'
              >
                {continent.name}
              </Text>
              <Text
                fontWeight='bold'
                fontSize={{ lg: 'xl', xl: '2xl' }}
                color='gray.50'
                textAlign='center'
                align='center'
                mt='4'
              >
                {continent.description}
              </Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
