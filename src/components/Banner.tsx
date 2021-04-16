import { Flex, Text, Image, Box } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      width='100%'
      h={{ lg: '72', xl: '80' }}
      bgImage='url(images/background-banner.png)'
      bgPosition='center'
      bgSize='cover'
      bgRepeat='no-repeat'
    >
      <Flex
        justifyContent='space-between'
        align='center'
        width='100%'
        mx={{ lg: '16', xl: '36' }}
      >
        <Box>
          <Text
            color='gray.50'
            fontSize={{ lg: '2xl', xl: '4xl' }}
            lineHeight={{ lg: '2.5rem', xl: '3.375rem' }}
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Text>
          <Text color='gray.100' fontSize={{ lg: 'sm', xl: 'xl' }} mt='5'>
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Box>
        <Image src='images/airplane.png' mt={{ lg: '16', xl: '24' }} />
      </Flex>
    </Flex>
  );
}
