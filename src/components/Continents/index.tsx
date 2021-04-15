import { Flex, Text, Image, Box, Grid } from '@chakra-ui/react';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

export function Continents() {
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
        <SwiperSlide>
          <Flex
            width={[1024, 1240]}
            height={[178, 238, 450]}
            bgRepeat='no-repeat'
            bgImage='url(https://i.imgur.com/ilMh2Oc.jpg?1)'
            backgroundPosition='center'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
          >
            <Text
              fontWeight='bold'
              fontSize='5xl'
              color='gray.50'
              textAlign='center'
              align='center'
            >
              Europa
            </Text>
            <Text
              fontWeight='bold'
              fontSize='2xl'
              color='gray.50'
              textAlign='center'
              align='center'
              mt='4'
            >
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            width={[1024, 1240]}
            height={[178, 238, 450]}
            backgroundPosition='center'
            bgRepeat='no-repeat'
            bgImage='url(https://images.unsplash.com/photo-1543434732-1a9763ae7d35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)'
          >
            América do Norte
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            width={[1024, 1240]}
            height={[178, 238, 450]}
            backgroundPosition='center'
            bgRepeat='no-repeat'
            bgImage='url(https://images.unsplash.com/photo-1453063574201-48d2ffe2e4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)'
          >
            América do Sul
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            width={[1024, 1240]}
            height={[178, 238, 450]}
            backgroundPosition='center'
            bgRepeat='no-repeat'
            bgImage='url(https://images.unsplash.com/photo-1535139262971-c51845709a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)'
          >
            Ásia
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            width={[1024, 1240]}
            height={[178, 238, 450]}
            backgroundPosition='center'
            bgRepeat='no-repeat'
            bgImage='url(https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)'
          >
            Oceania
          </Box>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
