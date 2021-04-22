import { Flex, Text, Image } from '@chakra-ui/react';

interface TravelIconsProps {
  imageName: string;
  description: string;
}

export function TravelIcons({ imageName, description }: TravelIconsProps) {
  return (
    <Flex flexDirection='column' alignItems='center'>
      <Image
        src={`images/${imageName}.png`}
        width={{ md: '20', lg: '24', xl: '32' }}
      />

      <Text
        mt='6'
        fontWeight='semibold'
        fontSize={{ md: 'sm', lg: 'md', xl: 'xl' }}
        color='gray.500'
        textAlign='center'
      >
        {description}
      </Text>
    </Flex>
  );
}
