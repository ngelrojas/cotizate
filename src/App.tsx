import React from 'react';
import MainRouter from './routes';
import {GlobalLayout} from './styles';
import Headers from './components/headers';
import Footers from './components/footers';

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
