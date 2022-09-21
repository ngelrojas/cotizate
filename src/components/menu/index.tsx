import React from 'react';
import {MenuHome} from '../../constants';
import {Ul, Lin} from './styles';
import { Ilocation } from '../../types'

const Menu = (location: Ilocation) => {
  const pathName = location.pathname

  return(
      <Ul>
        {MenuHome ? MenuHome.map(item => {
          return(
            <li key={item.key}>
              <Lin href={item.path} underline='none'  primary={pathName == item.path ? true : false}>
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
