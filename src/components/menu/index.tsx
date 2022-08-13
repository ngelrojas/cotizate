import React from 'react';
import {MenuHome} from '../../utils/menu_home';
import Link from '@mui/material/Link';

const Menu = () => {
  return(
    <nav>
      <ul>
        {MenuHome ? MenuHome.map(item => {
          return(
            <li key={item.key}>
              <Link href={item.path} underline='none'>
                {/* <span>{item.title}</span> */}
                {
                  item.logo ? (<img src={item.logo} />):(item.title)
                } 
              </Link>
            </li>
          )
        }):('')}
      </ul>
    </nav>
  )
}

export default Menu;
