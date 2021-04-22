import { useEffect, useState } from 'react';
import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import { api } from '../services/api';

SwiperCore.use([Navigation, Pagination]);
interface ContinentsProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

export function Continents() {
  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true,
  });

  const [continents, setContinents] = useState<ContinentsProps[]>([]);

  useEffect(() => {
    api.get<ContinentsProps[]>('continents').then((response) => {
      setContinents(response.data);
    });
  }, []);

  console.log(continents);
  return (
    <>
      {isWideVersion && (
        <Flex
          mx='auto'
          mt='14'
          mb='10'
          maxWidth={{ md: '700px', lg: '900px', xl: '1240px' }}
        >
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
                <Link href={`/continent/${continent.name}`}>
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
                      fontSize={{ md: '3xl', lg: '4xl', xl: '5xl' }}
                      color='gray.50'
                      textAlign='center'
                      align='center'
                    >
                      {continent.name}
                    </Text>
                    <Text
                      fontWeight='bold'
                      fontSize={{ md: 'lg', lg: 'xl', xl: '2xl' }}
                      color='gray.50'
                      textAlign='center'
                      align='center'
                      mt='4'
                    >
                      {continent.description}
                    </Text>
                  </Flex>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      )}

      {!isWideVersion && (
        <Flex mx='auto' mt='5' mb='6' w='100%' h='72'>
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
                  height='100%'
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
                    fontWeight='semibold'
                    fontSize='2xl'
                    color='gray.50'
                    textAlign='center'
                    align='center'
                  >
                    {continent.name}
                  </Text>
                  <Text
                    fontWeight='semibold'
                    fontSize='sm'
                    color='gray.50'
                    textAlign='center'
                    align='center'
                    mt='4'
                    w='56'
                  >
                    {continent.description}
                  </Text>
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      )}
    </>
  );
}
