// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import {
//   useFetchContactsQuery,
//   useCreateContactMutation,
// } from '../../redux/contactsApi';
// import { getFilter, getFilteredContacts } from 'redux/contact_selector';

// import s from './ContactForm.module.css';

// import Notiflix from 'notiflix';
// Notiflix.Notify.init({
//   width: '380px',
//   position: 'center-top',
// });

// export default function ContactForm() {
//   const [params, setParams] = useState({ name: '', number: '' });

//   const { data } = useFetchContactsQuery();
//   const [addContact] = useCreateContactMutation();
//   const filter = useSelector(getFilter);
//   const contacts = getFilteredContacts(filter, data);

//   const handleChange = e => {
//     setParams({ ...params, [e.currentTarget.name]: e.currentTarget.value });
//   };

//   const handelSubmit = e => {
//     e.preventDefault();

//     if (
//       contacts.some(
//         contact => contact.name.toLowerCase() === params.name.toLowerCase()
//       )
//     ) {
//       return Notiflix.Notify.failure(`${params.name} is alredy in contacts`);
//     } else {
//       addContact({
//         params,
//       });
//     }
//     Notiflix.Notify.success(`Add contact ${params.name}`);

//     setParams({ name: '', number: '' });
//   };

//   return (
//     <form className={s.form} onSubmit={handelSubmit}>
//       <label className={s.label}>
//         <span className={s.text__name}>Name</span>
//         <input
//           className={s.input}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label className={s.label}>
//         <span className={s.text}>Number</span>
//         <input
//           className={s.input}
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button className={s.btn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }
