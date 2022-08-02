import ContactList from './componets/ContactList';
import ContactForm from './componets/ContactForm';
import Filter from './componets/Filter';
import Container from './componets/Container';
import { useState } from 'react';

import s from './App.module.css';

export default function App() {
  const [filter, setFilter] = useState('');
  const handleChange = e => {
    setFilter(e);
  };
  return (
    <>
      <Container>
        <h1 className={s.text}>Phonebook</h1>
        <ContactForm />

        <div>
          <h3 className={s.contacts}>Contacts</h3>
          <Filter filter={filter} handleChange={handleChange} />

          <ContactList filter={filter} />
        </div>
      </Container>
    </>
  );
}
