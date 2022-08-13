import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getIsLoggedIn } from 'redux/contact_selector';

export function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <> {isLoggedIn ? <Navigate to="/" /> : <Navigate to={'login'} />}</>;
}

export function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to="/" /> : children}</>;
}

export function CustomerRoute() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <> {isLoggedIn ? <Navigate to="/" /> : <Navigate to={'login'} />}</>;
}
