import { Flex, Text, Image } from '@chakra-ui/react';

interface TravelListProps {
  description: string;
  align: string;
}

export function TravelList({ description, align }: TravelListProps) {
  return (
    <Flex flexDirection='row' alignItems='center' justify={align}>
      <Image src='images/elipse.png' mr='2' />

      <Text fontWeight='medium' fontSize='lg' color='gray.500' textAlign='left'>
        {description}
      </Text>
    </Flex>
  );
}
