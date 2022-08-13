import { Suspense, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { getToken } from './redux/contact_selector';
import { useGetCurrentUserMutation } from './redux/contactsApi';
import {
  PublicRoute,
  PrivateRoute,
  CustomerRoute,
} from './componets/CustomerRoute/CustomerRoute.js';
// import Container from './componets/Container';
import HomeView from './views/HomeView';
import AppBar from './componets/AppBar/AppBar';
import RegisterView from './views/RegisterView';
// import NotFoundPage from './views/NotFoundPage';
import LoginView from './views/LoginView';
import PhonebookView from './views/PhonebookView';
// import LogoutView from './views/LogoutView';

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
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomeView />
                </PublicRoute>
              }
            />

            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginView />
                </PublicRoute>
              }
            />

            <Route
              path="contatcs"
              element={
                <PrivateRoute restricted>
                  <PhonebookView />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<CustomerRoute restricted />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}
