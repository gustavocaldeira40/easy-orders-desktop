import { createGlobalStyle } from 'styled-components'
import { Colors } from './colors'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background: ${Colors.primary};
    font-family: Roboto, Sans-Serif;
  }
  body html #root {
    height: 100%;
  }

  :root {
      font-size: 2em;

      @media (min-width: 768px) {
        font-size: 1.2em;
      }

      @media (min-width: 1024px) {
        font-size: 0.8em;
      }
    }
`

export default GlobalStyle
