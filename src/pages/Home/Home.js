import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import s from './Home.module.css';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={s.home}>
      {!isLoggedIn ? (
        <p className={s.text}>
          Hello, welcome to our simple phonebook service. If it's your first
          time here, you may register to have access to your phonebook. Also if
          you are already registered, just Login to your account.
        </p>
      ) : (
        <h1>Good to see you here, let's add some contacts</h1>
      )}
    </div>
  );
};

export default Home;
