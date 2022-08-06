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
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomeView />} />
            <Route path="/phonebook" element={<PhonebookView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
