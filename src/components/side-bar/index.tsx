import Grid from '@mui/material/Grid';
import {Section, TitleSide} from './styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

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
                  <ListItemText>
                    <Link href="#" underline='none'> - Article one</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link href="#" underline='none'> - Article two</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link href="#" underline='none'> - Article three</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

            </List>
          </Grid>
        </Grid>
      </Section>
  )
}

export default SideBar;
