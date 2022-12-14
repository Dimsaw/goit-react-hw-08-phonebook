import { useLogOutMutation } from 'redux/services';
import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from 'redux/selectors';
import { changeFilter } from 'redux/actions';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const [logOut, { isLoading }] = useLogOutMutation();

  function exit() {
    dispatch(changeFilter(''));
    logOut();
  }

  return (
    <div className={s.logout}>
      <span className={s.logout__text}>Hello, {name}!</span>
      <button
        className={s.btn}
        type="button"
        onClick={() => exit()}
        disabled={isLoading}
      >
        <span className={s.btn__text}>
          {' '}
          {isLoading ? 'Log outing...' : 'Log out'}{' '}
        </span>
        <img
          src="https://img.icons8.com/ios-filled/344/emergency-exit.png"
          width="20"
          height="20"
          alt="exit"
        />
      </button>
    </div>
  );
}
