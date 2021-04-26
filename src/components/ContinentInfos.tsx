import {
  Flex,
  Text,
  Grid,
  GridItem,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { useState } from 'react';

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
  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true,
  });

  const [isLabelOpen, setIsLabelOpen] = useState(false);

  return (
    <>
      {isWideVersion && (
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
      )}

      {!isWideVersion && (
        <Flex
          mt='6'
          mb='4'
          ml='4'
          mr='4'
          align='center'
          justify='space-between'
          flexDirection='column'
        >
          <Text
            textAlign='justify'
            fontSize='sm'
            color='gray.500'
            lineHeight='tall'
          >
            {bio}
          </Text>
          <Grid templateColumns='repeat(3, 1fr)' gap={0} mt='6'>
            <GridItem align='center' textAlign='left'>
              <Text fontSize='2xl' lineHeight='6' color='yellow.500'>
                {coutriesCount}
              </Text>
              <Text fontSize='lg' lineHeight='6' color='gray.500'>
                países
              </Text>
            </GridItem>

            <GridItem align='center' textAlign='left'>
              <Text fontSize='2xl' lineHeight='6' color='yellow.500'>
                {languagesAmount}
              </Text>
              <Text fontSize='lg' lineHeight='6' color='gray.500'>
                línguas
              </Text>
            </GridItem>

            <GridItem align='center' textAlign='left'>
              <Text fontSize='2xl' lineHeight='6' color='yellow.500'>
                {cities100}
              </Text>
              <Text fontSize='lg' lineHeight='6' color='gray.500'>
                cidades +100
                <Tooltip
                  label='As cidades +100 são as cidades que este continente possui que estão entre as 100 cidades mais visitadas do mundo.'
                  aria-label='A tooltip'
                  isOpen={isLabelOpen}
                >
                  <InfoOutlineIcon
                    fontSize='md'
                    color='gray.200'
                    ml='2'
                    onMouseEnter={() => setIsLabelOpen(true)}
                    onMouseLeave={() => setIsLabelOpen(false)}
                    onClick={() => setIsLabelOpen(true)}
                  />
                </Tooltip>
              </Text>
            </GridItem>
          </Grid>
        </Flex>
      )}
    </>
  );
}
