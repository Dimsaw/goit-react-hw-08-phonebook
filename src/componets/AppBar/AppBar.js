import Navigation from '../Navigation';
// import AuthNav from '../../componets/AuthNav';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

export default function AppBar() {
  return (
    <>
      <header>
        <Navigation />
        {/* {<AuthNav />} */}
      </header>
      {/* <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main> */}
    </>
  );
}
