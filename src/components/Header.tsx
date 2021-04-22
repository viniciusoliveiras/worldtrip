import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';

export function Header() {
  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true,
  });

  return (
    <>
      {isWideVersion && (
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
      )}

      {!isWideVersion && (
        <Flex
          as='header'
          w='100%'
          maxWidth={1450}
          h='12'
          mx='auto'
          p='6'
          align='center'
          justify='center'
        >
          <Image
            src='images/logo.svg'
            alt='WorldTrip'
            boxSize='20'
            objectFit='contain'
          />
        </Flex>
      )}
    </>
  );
}
