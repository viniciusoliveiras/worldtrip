import { Flex, Text, Grid, GridItem, Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

export function ContinentsInfos() {
  return (
    <Flex
      mt='20'
      mb='20'
      ml='36'
      mr='36'
      align='center'
      justify='space-between'
    >
      <Text
        w='xl'
        textAlign='justify'
        fontSize='2xl'
        lineHeight='9'
        color='gray.500'
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Grid templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem align='center'>
          <Text
            fontSize='5xl'
            fontWeight='semibold'
            lineHeight='4.5rem'
            color='yellow.500'
          >
            50
          </Text>
          <Text
            fontSize='2xl'
            lineHeight='9'
            fontWeight='semibold'
            color='gray.500'
          >
            países
          </Text>
        </GridItem>

        <GridItem align='center'>
          <Text
            fontSize='5xl'
            fontWeight='semibold'
            lineHeight='4.5rem'
            color='yellow.500'
          >
            60
          </Text>
          <Text
            fontSize='2xl'
            lineHeight='9'
            fontWeight='semibold'
            color='gray.500'
          >
            línguas
          </Text>
        </GridItem>

        <GridItem align='center'>
          <Text
            fontSize='5xl'
            fontWeight='semibold'
            lineHeight='4.5rem'
            color='yellow.500'
          >
            27
          </Text>
          <Text
            fontSize='2xl'
            lineHeight='9'
            fontWeight='semibold'
            color='gray.500'
          >
            cidades +100
            <Tooltip
              label='As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo.'
              aria-label='A tooltip'
            >
              <InfoOutlineIcon fontSize='md' color='gray.200' ml='2' />
            </Tooltip>
          </Text>
        </GridItem>
      </Grid>
    </Flex>
  );
}
