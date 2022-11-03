import React from 'react';
import Menu from '../menu'; 
import BoxSearch from '../search';
import { Nav } from './styles';
import { Ilocation } from '../../types';

const Headers = (location: Ilocation) => {
  const pathName = location.pathname
  const url_1 = pathName !== '/ingresar' ? true : false
  const url_2 = pathName !== '/registrarse' ? true : false
  const display_ = url_1 === url_2 ? true : false

  return(
    <>
      <Nav>
        <Menu {...location} />
      </Nav>
        {
          display_ ? (<BoxSearch />):('') 
        }
    </>

  )
}

export default Headers;
