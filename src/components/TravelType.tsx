import { Flex, Text, Image, Box, Grid } from '@chakra-ui/react';

export function TravelTypes() {
  return (
    <Flex mt='28' mx='36' justifyContent='center' width='1440'>
      <Grid templateColumns='repeat(5, 1fr)' gap={28}>
        <Flex flexDirection='column' width='40' alignItems='center'>
          <Image src='images/cocktail.png' width='32' />
          <Text
            mt='6'
            fontWeight='semibold'
            fontSize='2xl'
            color='gray.500'
            textAlign='center'
          >
            vida noturna
          </Text>
        </Flex>
        <Flex flexDirection='column' width='40' alignItems='center'>
          <Image src='images/surf.png' width='32' />
          <Text
            mt='6'
            fontWeight='semibold'
            fontSize='2xl'
            color='gray.500'
            textAlign='center'
          >
            praia
          </Text>
        </Flex>
        <Flex flexDirection='column' width='40' alignItems='center'>
          <Image src='images/building.png' width='32' />
          <Text
            mt='6'
            fontWeight='semibold'
            fontSize='2xl'
            color='gray.500'
            textAlign='center'
          >
            moderno
          </Text>
        </Flex>
        <Flex flexDirection='column' width='40' alignItems='center'>
          <Image src='images/museum.png' width='32' />
          <Text
            mt='6'
            fontWeight='semibold'
            fontSize='2xl'
            color='gray.500'
            textAlign='center'
          >
            clássico
          </Text>
        </Flex>
        <Flex flexDirection='column' width='40' alignItems='center'>
          <Image src='images/earth.png' width='32' />
          <Text
            mt='6'
            fontWeight='semibold'
            fontSize='2xl'
            color='gray.500'
            textAlign='center'
          >
            e mais...
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
}
