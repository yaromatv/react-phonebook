import { extendTheme } from '@chakra-ui/react';
import '@fontsource/lexend/';

// const breakpoints = {
//   sm: '30em', // ~480px
//   md: '48em', // ~768px
//   xl: '80em', // ~1280px
// };

export const theme = extendTheme({
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
      //   baseStyle: {
      //     bg: 'red.500',
      //     fontWeight: 'bold',
      //   },
      defaultProps: {
        // size: 'lg', // default is md
        // variant: 'sm', // default is solid
        colorScheme: 'purple', // default is gray
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
