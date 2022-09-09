import React from 'react';
import Grid from '@mui/material/Grid';
import { FooterContainer, FooterTitle } from "./styles";
import { SOCIAL_NETWORKS, CONTACTS, WEARE } from '../../constants';
import {render_link} from '../../utils'

const Footers = () => {

  return(
    <FooterContainer>
      <Grid container spacing={2}> 
        <Grid item xs={4}>

          <FooterTitle> <h3>REDES SOCIALES</h3></FooterTitle> 
            {
              render_link(SOCIAL_NETWORKS)
            }
        </Grid>
        <Grid item xs={4}>
          <FooterTitle> <h3>NOSOTROS</h3></FooterTitle> 
            {
              render_link(WEARE)
            }
        </Grid>
        <Grid item xs={4}>
          <FooterTitle> <h3>CONTACTOS</h3></FooterTitle> 
            {
              render_link(CONTACTS)
            }
        </Grid>
      </Grid>
    </FooterContainer>
  )
}

export default Footers;
