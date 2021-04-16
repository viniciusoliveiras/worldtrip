import { Flex, Text, Image, Box, Grid } from '@chakra-ui/react';

export function TravelTypes() {
  return (
    <Flex
      w='100%'
      mt={{ lg: '24', xl: '28' }}
      justifyContent='center'
      alignContent='center'
      px='8'
    >
      <Grid templateColumns='repeat(5, 1fr)' gap={24} maxWidth={1100}>
        <Flex flexDirection='column' alignItems='center'>
          <Image src='images/cocktail.png' width={{ lg: '24', xl: '32' }} />
          <Text
            mt='6'
            fontWeight='semibold'
            fontSize={{ lg: 'md', xl: 'xl' }}
            color='gray.500'
            textAlign='center'
          >
            vida noturna
          </Text>
        </Flex>
        <Flex flexDirection='column' alignItems='center'>
          <Image src='images/surf.png' width={{ lg: '24', xl: '32' }} />
          <Text
            mt='6'
            fontWeight='semibold'
            fontSize={{ lg: 'md', xl: 'xl' }}
            color='gray.500'
            textAlign='center'
          >
            praia
          </Text>
        </Flex>
        <Flex flexDirection='column' alignItems='center'>
          <Image src='images/building.png' width={{ lg: '24', xl: '32' }} />
          <Text
            mt='6'
            fontWeight='semibold'
            fontSize={{ lg: 'md', xl: 'xl' }}
            color='gray.500'
            textAlign='center'
          >
            moderno
          </Text>
        </Flex>
        <Flex flexDirection='column' alignItems='center'>
          <Image src='images/museum.png' width={{ lg: '24', xl: '32' }} />
          <Text
            mt='6'
            fontWeight='semibold'
            fontSize={{ lg: 'md', xl: 'xl' }}
            color='gray.500'
            textAlign='center'
          >
            clássico
          </Text>
        </Flex>
        <Flex flexDirection='column' alignItems='center'>
          <Image src='images/earth.png' width={{ lg: '24', xl: '32' }} />
          <Text
            mt='6'
            fontWeight='semibold'
            fontSize={{ lg: 'md', xl: 'xl' }}
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
