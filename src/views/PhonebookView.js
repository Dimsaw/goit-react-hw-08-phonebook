export default function PhonebookView() {
  return (
    <p>
      The following tool will convert your text into graphics using ambigram
      fonts. Simply enter your text, select a color and text effect, and hit
      GENERATE button. You can then save the image, or use the EMBED button to
      get image links.
    </p>
  );
}

// import ContactList from '../componets/ContactList';
// import ContactForm from '../componets/ContactForm';
// import Filter from '../componets/Filter';
// import Container from '../componets/Container';
// import { useState } from 'react';

// import s from '../App.module.css';

// export default function PhonebookView() {
//   const [filter, setFilter] = useState('');
//   const handleChange = e => {
//     setFilter(e);
//   };
//   return (
//     <>
//       <Container>
//         <h1 className={s.text}>Phonebook</h1>
//         <ContactForm />

//         <div>
//           <h3 className={s.contacts}>Contacts</h3>
//           <Filter filter={filter} handleChange={handleChange} />

//           <ContactList filter={filter} />
//         </div>
//       </Container>
//     </>
//   );
// }
