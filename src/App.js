import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Container from './componets/Container';
import HomeView from './views/HomeView';
import AppBar from './componets/AppBar/AppBar';
import RegisterView from './views/RegisterView';
import NotFoundPage from './views/NotFoundPage';
import LoginView from './views/LoginView';
import PhonebookView from './views/PhonebookView';
import LogoutView from './views/LogoutView';

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={'Loading.....'}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="contatcs" element={<PhonebookView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="logout" element={<LogoutView />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
