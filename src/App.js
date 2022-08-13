import { Suspense, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { getToken } from './redux/contact_selector';
import { useGetCurrentUserMutation } from './redux/contactsApi';
// import Container from './componets/Container';
import HomeView from './views/HomeView';
import AppBar from './componets/AppBar/AppBar';
import RegisterView from './views/RegisterView';
import NotFoundPage from './views/NotFoundPage';
import LoginView from './views/LoginView';
import PhonebookView from './views/PhonebookView';
import LogoutView from './views/LogoutView';

export default function App() {
  const [content, setContent] = useState(false);
  const token = useSelector(getToken);
  const [fetchCurrentUser, { isSuccess, isError }] = useGetCurrentUserMutation;

  useEffect(() => {
    if (token) {
      fetchCurrentUser();
    } else {
      toggleContent();
    }
  }, [fetchCurrentUser, token]);

  const toggleContent = () => {
    setContent(state => !state);
  };

  return (
    (content || isSuccess || isError) && (
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
    )
  );
}
