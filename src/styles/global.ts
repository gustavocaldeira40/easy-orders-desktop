import { createGlobalStyle } from 'styled-components'
import px2vw from '../utils/px2vw'
import { Colors } from './colors'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background: ${Colors.secondary};
    font-family: Roboto, Sans-Serif;
  }
  body html #root {
    height: 100%;
  }

  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`

export default GlobalStyle
