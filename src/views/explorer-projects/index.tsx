import React from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ListPosts from '../../components/list-posts';
import { Ilocation } from '../../types';
import Headers from '../../components/headers';

const ExplorerProjectPage = () => {
  const location:Ilocation = useLocation();
  return(
    <>
      <Headers {...location} />
      <Grid container>
        <h1>EXPLORER PROJECTS</h1>
        <ListPosts />
      </Grid>
    </>
    
  )
}

export default ExplorerProjectPage;
