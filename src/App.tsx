import React from 'react';
import MainRouter from './routes'; 
import Headers from './components/headers';
import Footers from './components/footers';
import {GlobalLayout} from './styles';

function App() {
  return (
    <>
      <GlobalLayout />
      <Headers />
      <MainRouter />
      <Footers />
    </>
  );
}

export default App;
