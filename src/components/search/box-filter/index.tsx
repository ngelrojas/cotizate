import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilmOptionType) => option.title,
});

const BoxFilter = () => {
  return (
    <Autocomplete
      id="searching"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 150 }}
      renderInput={(params) => <TextField {...params} label="Buscar por" />}
    />
  );
}

interface FilmOptionType {
  title: string;
  year: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Titulo', year: 1994 },
  { title: 'Categoria', year: 1972 },
];

export default BoxFilter;
