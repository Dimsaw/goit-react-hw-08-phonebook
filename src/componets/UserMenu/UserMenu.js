import { useLogOutMutation } from 'redux/contactsApi';
import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from 'redux/contact_selector';
import { changeFilter } from 'redux/actions';

export default function UserMenu() {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const [logOut, { isLoading }] = useLogOutMutation;

  function exit() {
    dispatch(changeFilter(''));
    logOut();
  }

  return (
    <div>
      <span>Hello, {name}!</span>
      <button type="button" onClick={() => exit()} disabled={isLoading}>
        {isLoading ? 'Log outing...' : 'Log out'} {''}
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
