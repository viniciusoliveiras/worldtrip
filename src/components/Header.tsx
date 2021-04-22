import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
interface HeaderProps {
  isHomePage: boolean;
}

export function Header({ isHomePage }: HeaderProps) {
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
          {!isHomePage && (
            <ChevronLeftIcon
              fontSize='32'
              className='backButton'
              position='absolute'
              transform={{
                md: 'translateX(-18rem)',
                lg: 'translateX(-19rem)',
                xl: 'translateX(-20rem)',
              }}
            />
          )}

          <Image src='../images/logo.svg' alt='WorldTrip' />
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
