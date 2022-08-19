// import React from 'react';
import Grid from '@mui/material/Grid';
import ListPosts from "../../components/list-posts";
import SideBar from "../../components/side-bar";

// import { Main } from './styles';

// const HomePage = () => {

//     const [showTopBtn, setShowTopBtn] = useState(false);

//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             if (window.scrollY > 400) {
//                 setShowTopBtn(true);
//             } else {
//                 setShowTopBtn(false);
//             }
//         });
//     }, []);
//     // const goToTop = () => {
//     //     window.scrollTo({
//     //         top: 0,
//     //         behavior: "smooth",
//     //     });
//     // };

//     console.log('SCROLL Y IS ',window.scrollY)
//     return (
//         <Main>
//             <ListPosts />

//             <SideBar />
//         </Main>
//     );
// };

const HomePage = () => {
  return(
    <Grid container>
      <ListPosts />

      <SideBar />

    </Grid> 
  )
}

export default HomePage;
