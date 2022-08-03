import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';

export default function AppBar() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <h2> © 2022 GitHub, Inc. Footer navigation Terms Privacy</h2>
      </footer>
    </>
  );
}
