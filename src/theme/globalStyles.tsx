import { GlobalStyles as MUIGlobalStyles } from '@mui/material'

const GlobalStyles: React.FC = (): JSX.Element => {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        },
        html: {
          fontSize: '62.5%',
          WebkitOverflowScrolling: 'touch',
          minHeight: '100vh'
        },
        body: {
          width: '100%',
          minHeight: '100vh'
        },
        img: {
          display: 'block'
        },
        ul: {
          margin: 0,
          padding: 0
        },
        a: {
          textDecoration: 'none'
        }
      }}
    />
  )

  return inputGlobalStyles
}

export default GlobalStyles
