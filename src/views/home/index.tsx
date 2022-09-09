import React from 'react';

import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ListPosts from "../../components/list-posts";
import SideBar from "../../components/side-bar";
import { Ilocation } from '../../types';
import Headers from '../../components/headers';

const HomePage = () => {

  const location:Ilocation = useLocation();
  return(
    <>
      <Headers {...location} />
      <Grid container>
        <ListPosts />

        <SideBar />

      </Grid>
    </>
 
  )
}

export default HomePage;
