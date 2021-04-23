import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
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
            <Link href='/'>
              <ChevronLeftIcon
                fontSize='32'
                position='absolute'
                transform={{
                  md: 'translateX(-18rem)',
                  lg: 'translateX(-23rem)',
                  xl: 'translateX(-28.5rem)',
                }}
              />
            </Link>
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
          {!isHomePage && (
            <Link href='/'>
              <ChevronLeftIcon
                fontSize='16'
                className='backButton'
                position='absolute'
                transform='translateX(-8rem)'
              />
            </Link>
          )}
          <Image
            src='../images/logo.svg'
            alt='WorldTrip'
            boxSize='20'
            objectFit='contain'
          />
        </Flex>
      )}
    </>
  );
}
