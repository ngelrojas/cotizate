import React from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Ilocation } from '../../types';
import Headers from '../../components/headers';

const RegisterPage = () => {

  const location:Ilocation = useLocation();
  return(
    <>

      <Headers {...location} />
    <Grid container>
      page register
    </Grid>
      </>

  )
}

export default RegisterPage;
