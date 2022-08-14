// import React from 'react';
import ListPosts from "../../components/list-posts";
import SideBar from "../../components/side-bar";
import { Main } from './styles';

const HomePage = () => {
  return(
    <Main>
      <ListPosts />

      <SideBar />

    </Main> 
  )
}

export default HomePage;
