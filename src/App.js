import React, { lazy, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './App.module.css';

import AppBar from './components/AppBar';
import Loader from './components/Loader';
import {
  PublicRoute,
  PrivateRoute,
  CustomRoute,
} from 'components/CustomRouter/CustomRoute';

import { useGetCurrentUserMutation } from 'redux/services';
import { getToken } from 'redux/selectors';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const Contacts = lazy(() => import('pages/Contacts/Contacts.js'));

export default function App() {
  const token = useSelector(getToken);

  const [fetchCurrentUser] = useGetCurrentUserMutation({
    skip: token,
  });

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <>
      <div className={s.mainContainer}>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />

            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LogIn />
                </PublicRoute>
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute restricted>
                  <Contacts />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<CustomRoute restricted />} />
          </Routes>
        </Suspense>
        <footer className={s.footer}>
          <h2 className={s.footer__text}>
            {' '}
            © 2022 GitHub, Inc. Footer navigation Terms Privacy
          </h2>
        </footer>
      </div>
    </>
  );
}
