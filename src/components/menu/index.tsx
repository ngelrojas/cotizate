import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useNavigate }  from 'react-router-dom';
import { MenuHome, MenuUser } from '../../constants';
import {Ul, Lin} from './styles';
import { CheckAuth } from '../../services/auth.service';
// import { Ilocation } from '../../types'

function MenuGeneral(menu:any, pathName: string){
  return(
      <Ul>
        {menu ? menu.map((item: any) => {
          return(
            <li key={item.key}>
              <Lin href={item.path} underline='none'  primary={pathName == item.path ? true : false}>
                {
                  item.title
                } 
              </Lin>
            </li>
          )
        }):(null)}
      </Ul>
  )
}

const Menu = (props: any) => {
  const pathName = location.pathname
  let navigate = useNavigate();

  if(!CheckAuth()){
    navigate('/') 
  }

  return(
    <>
      {
        props.user.authenticated ? 
          (MenuGeneral(MenuUser, pathName)):
          (MenuGeneral(MenuHome, pathName))
      }
    </>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.user
});

export default connect(mapStateToProps, null)(Menu);
