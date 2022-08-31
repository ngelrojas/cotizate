import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import {Section, TitleSide, Go} from './styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

const SideBar = () => {
  return (
      <Section>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TitleSide>
              <h3>Contenido</h3>
            </TitleSide>
          </Grid>
          <Grid>

            <List
                  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                  aria-label="contacts"
                >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Article one" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Article two" />
                </ListItemButton>
              </ListItem>


            </List>
          </Grid>
        </Grid>
      </Section>
  )
}

export default SideBar;
