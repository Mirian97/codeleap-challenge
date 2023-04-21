import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { GlobalProvider } from 'contexts/GlobalContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from 'routes'
import GlobalStyles from 'theme/globalStyles'
import theme from 'theme/index'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <GlobalStyles />
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <Box
            bgcolor={theme.palette.background.default}
            display='flex'
            justifyContent='center'
            minHeight='100vh'
            width='100%'
          >
            <MainRoutes />
          </Box>
        </ThemeProvider>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
)
