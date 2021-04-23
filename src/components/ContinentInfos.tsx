import { Flex, Text, Grid, GridItem, Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

interface ContinentsInfosProps {
  bio: string;
  coutriesCount: number;
  languagesAmount: number;
  cities100: number;
}

export function ContinentsInfos({
  bio,
  coutriesCount,
  languagesAmount,
  cities100,
}: ContinentsInfosProps) {
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
        {bio}
      </Text>
      <Grid templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem align='center'>
          <Text
            fontSize='5xl'
            fontWeight='semibold'
            lineHeight='4.5rem'
            color='yellow.500'
          >
            {coutriesCount}
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
            {languagesAmount}
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
            {cities100}
          </Text>
          <Text
            fontSize='2xl'
            lineHeight='9'
            fontWeight='semibold'
            color='gray.500'
          >
            cidades +100
            <Tooltip
              label='As cidades +100 são as cidades que este continente possui que estão entre as 100 cidades mais visitadas do mundo.'
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
