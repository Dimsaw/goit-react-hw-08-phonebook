import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Container from './componets/Container';
import HomeView from './views/HomeView';
import AppBar from './componets/AppBar/AppBar';
import RegisterView from './views/RegisterView';

export default function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomeView />} />
            <Route path="*" element={<RegisterView />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
