import { createTheme } from '@mui/material'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1990
    }
  },
  palette: {
    grey: {
      50: '#CCCCCC',
      100: '#777777',
      200: '#999999'
    },
    primary: {
      main: '#7695EC',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#000000',
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#FF5151',
      contrastText: '#FFFFFF'
    },
    success: {
      main: '#47B960',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#DDDDDD',
      paper: '#FFFFFF'
    }
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h3: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '2.2rem',
      lineHeight: '2.6rem',
      fontWeight: 700
    },
    h4: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '2rem',
      lineHeight: '2.4rem',
      fontWeight: 700
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '1.8rem',
      lineHeight: '2.1rem'
    },
    body2: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '1.4rem',
      lineHeight: '2rem'
    },
    button: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
      fontSize: '1.6rem',
      lineHeight: '1.9rem',
      color: '#FFFFFF',
      minHeight: 32,
      textTransform: 'none',
      width: 120
    }
  }
})

export default theme
