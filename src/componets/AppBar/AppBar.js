import Navigation from '../Navigation';
import AuthNav from '../../componets/AuthNav';
import UserMenu from '../../componets/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/contact_selector';

export default function AppBar() {
  const isLogeedIn = useSelector(getIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLogeedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
