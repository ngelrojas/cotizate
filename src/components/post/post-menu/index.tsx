import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from '@mui/material/Link';

const options = [
  {id: 1, name: 'Ver', target: '_blank'},
  {id: 2, name: 'Ver aqui', target: ''},
  {id: 3, name: 'Recaudacion', target: '_blank'},
  {id: 4, name: 'Recaudacion aqui', target: ''},
];

const ITEM_HEIGHT = 48;

const PostMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.id}>
              <Link target={option.target} href='/crear-proyectos' underline='none'>{option.name}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default PostMenu;
