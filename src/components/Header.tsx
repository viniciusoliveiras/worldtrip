import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1450}
      h='24'
      mx='auto'
      p='6'
      align='center'
      justify='center'
    >
      <Image src='images/logo.svg' alt='WorldTrip' />
    </Flex>
  );
}
