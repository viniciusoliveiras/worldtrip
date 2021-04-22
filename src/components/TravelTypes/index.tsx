import {
  Flex,
  Grid,
  GridItem,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';
import { TravelIcons } from './TravelIcons';
import { TravelList } from './TravelList';

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true,
  });

  return (
    <Flex
      w='100%'
      mt={{ md: '20', lg: '24', xl: '28' }}
      justifyContent='center'
      alignContent='center'
      px='8'
    >
      {isWideVersion && (
        <Grid templateColumns='repeat(5, 1fr)' gap={24} maxWidth={1100}>
          <TravelIcons imageName='cocktail' description='vida noturna' />

          <TravelIcons imageName='surf' description='praia' />

          <TravelIcons imageName='building' description='moderno' />

          <TravelIcons imageName='museum' description='clássico' />

          <TravelIcons imageName='earth' description='e mais...' />
        </Grid>
      )}

      {!isWideVersion && (
        <Grid h='120px' templateRows='repeat(3, 1fr)' gap={4} mt='9' mb='9'>
          <GridItem colSpan={2}>
            <TravelList description='vida noturna' align='flex-start' />
          </GridItem>

          <GridItem colSpan={2}>
            <TravelList description='praia' align='flex-end' />
          </GridItem>

          <GridItem colSpan={2}>
            <TravelList description='moderno' align='flex-start' />
          </GridItem>

          <GridItem colSpan={2}>
            <TravelList description='clássico' align='flex-end' />
          </GridItem>

          <GridItem colSpan={4}>
            <TravelList description='e mais...' align='center' />
          </GridItem>
        </Grid>
      )}
    </Flex>
  );
}
