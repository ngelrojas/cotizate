import styled, {createGlobalStyle} from 'styled-components'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export const GlobalLayout = createGlobalStyle`
    html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0; }
  body {
    background: #fefefe;
    margin: 0px;
    padding: 0px; 
}
`

export const ArrowUpIcon = styled(ArrowCircleUpIcon)`
  color: rgb(243,122,34);
`
