import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "../views/home";
import ExplorerProjectPage from "../views/explorer-projects";
import CategoryPage from "../views/categories";
import RegisterPage from "../views/register";
import LoginPage from "../views/login";
import PageNotFound from "../views/page-not-found";


const MainRouter = () => {

  return(
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/explorar-proyectos' element={<ExplorerProjectPage />} />
        <Route path='/categorias' element={<CategoryPage />} />
        <Route path='/registrarse' element={<RegisterPage />} />
        <Route path='/ingresar' element={<LoginPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default MainRouter;
 
