import { Flex, Text, Image, Box } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      width='100%'
      height={[178, 238, 335]}
      bgImage='url(/background-banner.png)'
    >
      <Flex justifyContent='space-between' align='center' width='100%' mx='36'>
        <Box>
          <Text color='gray.50' fontSize='4xl' lineHeight='3.375rem'>
            5 Continentes, <br /> infinitas possibilidades.
          </Text>
          <Text color='gray.100' fontSize='xl' mt='5'>
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Box>
        <Image src='/airplane.png' mt='24' />
      </Flex>
    </Flex>
  );
}
