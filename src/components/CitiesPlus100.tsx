import { Flex, Text, Grid, GridItem, Image, Box } from '@chakra-ui/react';
import { CitiesProps } from '../types';

interface CitiesPlus100PageProps {
  citiesToShow: CitiesProps[];
}

export function CitiesPlus100({ citiesToShow }: CitiesPlus100PageProps) {
  return (
    <Flex w='6xl' ml='36' mr='36' flexDirection='column'>
      <Text fontSize='4xl' fontWeight='medium' lineHeight='10' color='gray.500'>
        Cidades +100
      </Text>

      <Grid templateColumns='repeat(4, 1fr)' gap={12} mt='12' mb='8'>
        {citiesToShow.map((city) => (
          <GridItem
            w='2xs'
            h='xs'
            border='1px'
            borderColor='yellow.550'
            key={city.id}
          >
            <Image src={city.photo} />

            <Flex
              alignItems='center'
              justifyContent='space-between'
              ml='6'
              mr='6'
              mt='5'
            >
              <Box mt='4'>
                <Text fontWeight='semibold' fontSize='xl'>
                  {city.name}
                </Text>
                <Text mt='3' fontWeight='medium' fontSize='md' color='gray.200'>
                  {city.country}
                </Text>
              </Box>

              <Box>
                <Image src={city.flag} borderRadius='full' boxSize='30px' />
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}
