import { Flex, Text, Image, Box, useBreakpointValue } from '@chakra-ui/react';
import { ContinentsProps } from '../types';

interface BannerContinentProps {
  continent: ContinentsProps;
}

export function BannerContinent({ continent }: BannerContinentProps) {
  return (
    <Flex
      width='100%'
      h={{ md: 'sm', lg: 'md', xl: 'lg' }}
      bgImage={`url('${continent.bannerImage}')`}
      bgPosition='center'
      bgSize='cover'
      style={{ boxShadow: 'inset 0 0 0 50vw rgba(28, 20, 1, 0.35)' }}
      bgRepeat='no-repeat'
    >
      <Text
        fontWeight='bold'
        fontSize={{ md: '3xl', lg: '4xl', xl: '5xl' }}
        color='gray.50'
        textAlign='center'
        align='center'
        mt={{ sm: '72', lg: '80', xl: '96' }}
        ml={{ sm: '24', lg: '32', xl: '36' }}
      >
        {continent.name}
      </Text>
    </Flex>
  );
}
