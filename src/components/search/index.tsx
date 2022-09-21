import React from "react";
import BoxFilter from './box-filter';
import TextSearch from "./text-search";
import { Div } from './styles';

//TODO: create REDUX
const BoxSearch = () => {
  return(
    <Div>
      <BoxFilter />
      <TextSearch />
    </Div>
  )
}

export default BoxSearch;


