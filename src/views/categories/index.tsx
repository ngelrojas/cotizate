import React from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ListPosts from '../../components/list-posts';
import Headers from '../../components/headers';
import { Ilocation } from '../../types'

const CategoryPage = () => {
  const location:Ilocation = useLocation()

  return(
    <>
      <Headers {...location}  />
      <Grid container>

        <h1>CATEGORIAS</h1>
        <ListPosts />
      </Grid>
    </>

  )
}

export default CategoryPage;
