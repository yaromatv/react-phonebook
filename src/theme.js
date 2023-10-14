import { extendTheme } from '@chakra-ui/react';
import '@fontsource/lexend/';

const breakpoints = {
  base: '0em', // 0px
  sm: '30em', // ~480px
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
};

export const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'Lexend', sans-serif`,
    body: `'Lexend', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semi-bold',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
      },
      defaultProps: {
        colorScheme: 'purple',
      },
    },
  },
});
