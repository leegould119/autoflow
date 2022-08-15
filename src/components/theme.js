import { createTheme } from '@mui/material/styles';
/**
 * main theme file 
 */
const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 'bold',
          },
          outlined: {
            color: '#07192C',
          },
          text: {
            color: '#07192C',
          }
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontSize: '2.5em',
            color: '#07192C',
            fontWeight: 'bold',
            lineHeight: '2em',
          },
          body1: {
            color: '#2699FB',
            lineHeight: 2,
          },
          body2: {
            fontSize: '1.3em',
            color: '#778592',
          }
        },
      },
    },
  });

  export default theme;