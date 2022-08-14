import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const TextSearch = () => {
  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: 400, border: '0.8px solid rgba(0,0,0,0.3)', boxShadow: 'none' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}


export default TextSearch;
