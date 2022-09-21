import styled from 'styled-components';
import Link from '@mui/material/Link';

interface IProps {
  primary: boolean
}

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 1%;
`

export const Lin = styled(Link)`
  color: ${(props:IProps) => props.primary ? "rgb(243, 122, 34)!important" : "#ffffff !important"};
  :hover{
    color: rgb(243, 122, 34)!important;
  }
`



