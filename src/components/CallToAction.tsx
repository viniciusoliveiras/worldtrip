import { Flex, Text, Divider, Stack } from '@chakra-ui/react';

export function CallToAction() {
  return (
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
  );
}
