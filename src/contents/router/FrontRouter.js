import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
//css
import '../views/front/assets/scss/styles.scss'
//components
import Header from '../views/front/components/inc/Header';
import Footer from '../views/front/components/inc/Footer';
//components
import ScrollToTop from '../views/front/components/inc/ScrollTop'
//pages
import Main from '../views/front/page/Main';
import Faq from '../views/front/page/Faq';
import Tv from '../views/front/page/Tv';
import Inquiry from '../views/front/page/Inquiry';

function AppRouter() {
  const routes = [
    { path: '/', element: <Navigate to="/front/Main" /> },
    { path: '/front', element: <Navigate to="/front/Main" /> },
    { path: '/front/Main', element: <Main /> },
    { path: '/front/Faq', element: <Faq /> },
    { path: '/front/Tv', element: <Tv /> },
    { path: '/front/Inquiry', element: <Inquiry /> },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

function FrontRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header/>
      <AppRouter />
      <Footer/>
    </BrowserRouter>
  );
}

export default FrontRouter;
