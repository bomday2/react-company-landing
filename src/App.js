import React, { lazy, Suspense } from 'react';
import './App.css';

const FrontRouter = lazy(() => import('./contents/router/FrontRouter'));

function App() {
  const { pathname } = window.location;
  let routerComponent;
  if (pathname.toLowerCase().startsWith('/front')) {
      console.log('front!!!');
      routerComponent = (
        <FrontRouter />
      );
  } 
  return (
    <Suspense>
      {routerComponent}
    </Suspense>    
  );
}

export default App;
