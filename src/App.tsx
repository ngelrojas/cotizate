import React, {useState, useEffect} from 'react';
import ScrollToTop from "react-scroll-to-top";
import MainRouter from './routes'; 
import Headers from './components/headers';
import Footers from './components/footers';
import {GlobalLayout, ArrowUpIcon} from './styles';


function App() {
    const [ScrollCount, setScrollCount] = useState(0); 

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setScrollCount(window.scrollY);
            } else {
                setScrollCount(0);
            }
        });
    }, []);

  return (
    <React.Fragment>
        <GlobalLayout />
        <Headers sqty={ScrollCount} />
        <MainRouter />
        <ScrollToTop
          smooth 
          component={<ArrowUpIcon />}
          width='40'
          height='40'
        />
        <Footers />
    </React.Fragment>
  );
}

export default App;
