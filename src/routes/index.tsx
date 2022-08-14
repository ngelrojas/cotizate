import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "../views/home";
import PageNotFound from "../views/page-not-found";

const MainRouter = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default MainRouter;
