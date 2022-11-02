import React from "react";
import BoxFilter from './box-filter';
import TextSearch from "./text-search";
import { Div } from './styles';

const BoxSearch = () => {
  return(
    <Div>
      <BoxFilter />
      <TextSearch />
    </Div>
  )
}

export default BoxSearch;


