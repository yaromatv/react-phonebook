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
  //   colors: {
  //     customColor: {
  //       500: '#A0AEC0', // Замените на ваш кастомный цвет
  //     },
  //   },
  components: {
    Button: {
      baseStyle: {
        // bg: 'red.500',
        fontWeight: 'semi-bold',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
      },
      defaultProps: {
        // size: 'lg', // default is md
        // variant: 'sm', // default is solid
        // fontWeight: 'light',
        colorScheme: 'purple',
      },
    },

    Input: {
      baseStyle: {
        // fontSize: '30px',
        // padding: 5,
        // bg: 'red.500',
        // fontWeight: 'bold',
        // borderWidth: '10px',
      },
      defaultProps: {
        // fontSize: '30px',
        // size: 'lg', // default is md
        // variant: 'sm', // default is solid
        // borderWidth: '10px',
        // colorScheme: 'blue', // default is gray
      },
    },
  },
  styles: {
    global: {
      body: {
        // fontSize: '30px',
      },

      // a: {
      //   color: 'teal.500',
      //   _hover: {
      //     textDecoration: 'underline',
      //   },
      // },
    },
  },
});
