import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Container from './componets/Container';
import HomeView from './views/HomeView';
import AppBar from './componets/AppBar/AppBar';
import RegisterView from './views/RegisterView';
import NotFoundPage from './views/NotFoundPage';
import LoginView from './views/LoginView';
import PhonebookView from './views/PhonebookView';

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={'Loading.....'}>
        <Routes>
          <Route path="/" element={<PhonebookView />} />
          <Route path="contatcs" element={<HomeView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
