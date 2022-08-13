import React from 'react';
import MainRouter from './routes'; 
import Headers from './components/headers';
import Footers from './components/footers';

function App() {
  return (
    <>
      <Headers />
      <MainRouter />
      <Footers />
    </>
  );
}

export default App;
