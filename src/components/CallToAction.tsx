import { Flex, Text, Divider, Stack } from '@chakra-ui/react';

export function CallToAction() {
  return (
    <Flex mt='20' justifyContent='center'>
      <Stack justifyContent='center'>
        <Divider
          width='5.625rem'
          border='2px solid '
          borderColor='#47585B'
          textAlign='center'
          mb='14'
          mx='42rem'
        />
        <Text
          fontSize='4xl'
          color='gray.500'
          lineHeight='3.375rem'
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
