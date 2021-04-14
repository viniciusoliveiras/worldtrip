import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '50': '#F5F8FA' /* Light/Headings and Text */,
      '100': '#DADADA' /* Light/Info */,
      '200': '#999999' /* Dark/Info */,
      '250': 'rgba(153, 153, 153, 0.5)' /* Dark/Info 50% */,
      '500': '#47585B' /* Dark/Headings and Text */,
    },
    yellow: {
      '500': '#FFBA08' /* Highlight */,
      '550': 'rgba(255, 186, 8, 0.5)' /* Highlight 50% */,
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.500',
      },
    },
  },
});
