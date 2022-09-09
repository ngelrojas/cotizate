import React from 'react';

import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { ContainerForm } from './styles'

import { Ilocation } from '../../types';
import Headers from '../../components/headers';

//TODO: design login page
const LoginPage = () => {

  const location:Ilocation = useLocation();
  return(
    <>
      <Headers {...location} />
      <Grid container>
          <ContainerForm container>
            <Grid item xs={6}>
              <h1>login page</h1>
            </Grid>
          </ContainerForm>
      </Grid>
     </>

  )
}

export default LoginPage;
