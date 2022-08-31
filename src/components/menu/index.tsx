import React from 'react';
import {MenuHome} from '../../constants';
import {Ul, Lin} from './styles';

const Menu = () => {
  return(
      <Ul>
        {MenuHome ? MenuHome.map(item => {
          return(
            <li key={item.key}>
              <Lin href={item.path} underline='none'>
                {
                  item.logo ? (<img src={item.logo} />):(item.title)
                } 
              </Lin>
            </li>
          )
        }):(null)}
      </Ul>
  )
}

export default Menu;
