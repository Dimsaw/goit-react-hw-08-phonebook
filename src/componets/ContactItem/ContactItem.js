import { useDeleteContactMutation } from '../../redux/contact_slice';
import s from './ContatcItem.module.css';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

const ContactItem = ({ ids, name, number }) => {
  const [deleteContact, { isLoading: isDeleting, isSuccess }] =
    useDeleteContactMutation();

  return (
    <>
      {isSuccess && Notiflix.Notify.failure(`You deleted ${name} contact`)}
      <span>
        {name}: {number}
      </span>
      <button
        className={s.btn}
        type="submit"
        name={name}
        disabled={isDeleting}
        onClick={() => deleteContact(ids)}
      >
        <span className={s.btn__name}>
          {isDeleting ? 'Deleting...' : 'Delete'}
        </span>
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default ContactItem;
