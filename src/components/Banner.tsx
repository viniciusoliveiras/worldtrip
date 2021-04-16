import { Flex, Text, Image, Box } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      width='100%'
      h={{ md: '64', lg: '72', xl: '80' }}
      bgImage='url(images/background-banner.png)'
      bgPosition='center'
      bgSize='cover'
      bgRepeat='no-repeat'
    >
      <Flex
        justifyContent='space-between'
        align='center'
        width='100%'
        mx={{ md: '8', lg: '16', xl: '36' }}
      >
        <Box>
          <Text
            color='gray.50'
            fontSize={{ md: 'xl', lg: '2xl', xl: '4xl' }}
            lineHeight={{ md: '1.5rem', lg: '2.5rem', xl: '3.375rem' }}
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Text>
          <Text
            color='gray.100'
            fontSize={{ md: 'sm', lg: 'sm', xl: 'xl' }}
            mt='5'
          >
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Box>
        <Image
          src='images/airplane.png'
          mt={{ md: '28', lg: '28', xl: '28' }}
          boxSize={{ md: '290', lg: '350', xl: '420' }}
          objectFit='contain'
        />
      </Flex>
    </Flex>
  );
}
