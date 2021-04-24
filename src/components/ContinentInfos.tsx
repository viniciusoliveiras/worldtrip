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
      mt={{ md: '10', lg: '14', xl: '20' }}
      mb={{ md: '10', lg: '14', xl: '20' }}
      ml={{ md: '10', lg: '12', xl: '36' }}
      mr={{ md: '10', lg: '12', xl: '36' }}
      align='center'
      justify='space-between'
    >
      <Text
        w='xl'
        textAlign='justify'
        fontSize={{ md: 'lg', lg: 'xl', xl: '2xl' }}
        lineHeight={{ md: '7', lg: '8', xl: '9' }}
        color='gray.500'
      >
        {bio}
      </Text>
      <Grid templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem align='center'>
          <Text
            fontSize={{ md: '3xl', lg: '4xl', xl: '5xl' }}
            fontWeight='semibold'
            lineHeight='4.5rem'
            color='yellow.500'
          >
            {coutriesCount}
          </Text>
          <Text
            fontSize={{ md: 'lg', lg: 'xl', xl: '2xl' }}
            lineHeight='9'
            fontWeight='semibold'
            color='gray.500'
            mt={{ md: '-4', lg: '-3', xl: '0' }}
          >
            países
          </Text>
        </GridItem>

        <GridItem align='center'>
          <Text
            fontSize={{ md: '3xl', lg: '4xl', xl: '5xl' }}
            fontWeight='semibold'
            lineHeight='4.5rem'
            color='yellow.500'
          >
            {languagesAmount}
          </Text>
          <Text
            fontSize={{ md: 'lg', lg: 'xl', xl: '2xl' }}
            lineHeight='9'
            fontWeight='semibold'
            color='gray.500'
            mt={{ md: '-4', lg: '-3', xl: '0' }}
          >
            línguas
          </Text>
        </GridItem>

        <GridItem align='center'>
          <Text
            fontSize={{ md: '3xl', lg: '4xl', xl: '5xl' }}
            fontWeight='semibold'
            lineHeight='4.5rem'
            color='yellow.500'
          >
            {cities100}
          </Text>
          <Text
            fontSize={{ md: 'lg', lg: 'xl', xl: '2xl' }}
            lineHeight='9'
            fontWeight='semibold'
            color='gray.500'
            mt={{ md: '-4', lg: '-3', xl: '0' }}
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
