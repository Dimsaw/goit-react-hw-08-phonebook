import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getIsLoggedIn } from 'redux/contact_selector';

export function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <> {isLoggedIn ? <Navigate to="/" /> : <Navigate to={'login'} />}</>;
}
