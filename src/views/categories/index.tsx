import React from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ListPosts from '../../components/list-posts';
import Headers from '../../components/headers';
import { Ilocation } from '../../types'

const CategoryPage = () => {
  const location:Ilocation = useLocation()

  return(
    <>
      <Headers {...location}  />
      <Grid container>
      <Container component="main" maxWidth="xs">
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <h1>CATEGORIAS</h1>
        </Box>
      </Container>

      <ListPosts />
        <Box>side bar</Box>
      </Grid>
    </>

  )
}

export default CategoryPage;
