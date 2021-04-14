import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth='1440'
      h='24'
      mx='auto'
      px='6'
      align='center'
      justifyContent='center'
    >
      <Image src='../logo.svg' alt='WorldTrip' boxSize='auto' />
    </Flex>
  );
}
