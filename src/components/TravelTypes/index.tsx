import { Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import { TravelIcons } from './TravelIcons';

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
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
    </Flex>
  );
}
