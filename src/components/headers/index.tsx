import React, {useState} from 'react';
import Menu from '../menu'; 
import BoxSearch from '../search';
import { Nav } from './styles';

interface PropsSqty {
  sqty: number
}

const Headers = (props:PropsSqty) => {
  const [IsDisplay, setIsDisplay] = useState(false);
  console.log('IN HEADER ', props.sqty);


  return(
    <>
      <Nav>
        <Menu />
      </Nav>

      <BoxSearch />
    </>

  )
}

export default Headers;
