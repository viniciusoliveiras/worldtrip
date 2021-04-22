import {
  Flex,
  Text,
  Divider,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';

export function CallToAction() {
  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true,
  });

  return (
    <>
      {isWideVersion && (
        <Flex mt={{ md: '14', lg: '20', xl: '20' }} justifyContent='center'>
          <Stack justifyContent='center' align='center'>
            <Divider
              width='5.625rem'
              border='2px solid '
              borderColor='#47585B'
              bgColor='#47585B'
              mb='14'
            />
            <Text
              fontSize={{ md: 'xl', lg: '3xl', xl: '4xl' }}
              color='gray.500'
              lineHeight={{ md: '2rem', lg: '2.75rem', xl: '3.375rem' }}
              fontWeight='medium'
              textAlign='center'
            >
              Vamos nessa? <br />
              Então escolha seu continente
            </Text>
          </Stack>
        </Flex>
      )}

      {!isWideVersion && (
        <Flex justifyContent='center'>
          <Stack justifyContent='center' align='center'>
            <Divider
              width='3.75rem'
              border='2px solid '
              borderColor='#47585B'
              bgColor='#47585B'
              mt='9'
              mb='6'
            />
            <Text
              fontSize='xl'
              color='gray.500'
              lineHeight='8'
              fontWeight='medium'
              textAlign='center'
            >
              Vamos nessa? <br />
              Então escolha seu continente
            </Text>
          </Stack>
        </Flex>
      )}
    </>
  );
}
