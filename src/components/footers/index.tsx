import React from "react";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { FooterContainer, FooterTitle, FooterBody, SubBody } from "./styles";
import ColumnsFooter from "../columns-footer";

interface Sublink{
  id: number;
  label: string
}

interface ListLinks {
  sublinks: Sublink[] 
}

const Footers = () => {
  const sublinks = [
    {id: 1, label: 'LinkedIn'},
    {id: 2, label: 'Twitter'},
    {id: 3, label: 'Facebook'}
  ] 
//TODO: fixing - how to pass array in the component
  return(
    <FooterContainer>
      <Grid container spacing={2}> 
        <Grid item xs={4}>
          <ColumnsFooter title='REDES SOCIALES' sublinks={sublinks} />
          {/* <FooterTitle> <h3>REDES SOCIALES</h3></FooterTitle>  */}
          {/* <FooterBody> */}
          {/*   <SubBody> */}
          {/*     <Link underline="none">LinkedIn</Link> */}
          {/*   </SubBody> */}
          {/*   <SubBody> */}
          {/*     <Link underline="none">Twitter</Link> */}
          {/*   </SubBody> */}
          {/*   <SubBody> */}
          {/*     <Link underline="none">Facebook</Link> */}
          {/*   </SubBody> */}
          {/* </FooterBody> */}
        </Grid>
        <Grid item xs={4}>
          <FooterTitle> <h3>NOSOTROS</h3></FooterTitle> 
        </Grid>
        <Grid item xs={4}>
          <FooterTitle> <h3>CONTACTOS</h3></FooterTitle> 
        </Grid>
      </Grid>
    </FooterContainer>
  )
}

export default Footers;
