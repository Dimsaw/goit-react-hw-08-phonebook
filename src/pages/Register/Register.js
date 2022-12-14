import { useState } from 'react';
import { useSignUpMutation } from 'redux/services';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import s from './Register.module.css';

export default function SignUp() {
  const [params, setParams] = useState({ name: '', email: '', password: '' });
  const [signUp, { isLoading }] = useSignUpMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setParams({ ...params, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await signUp(params);
    if (response?.data?.token) {
      console.log(response?.data?.token);
      Notify.success(`Sign up success`);
      reset();
    } else {
      Notify.warning(`Check your info and try again`);
      setParams({ ...params, password: '' });
    }
  }

  const reset = () => {
    setParams({ name: '', email: '', password: '' });
  };
  return (
    <main className={s.mainContainer}>
      <form className={s.form} onSubmit={handleSubmit}>
        <h1 className={s.text}>Create your account</h1>

        <label className={s.label}>
          <span className={s.text__name}>Name</span>

          <input
            className={s.input}
            type="text"
            name="name"
            value={params.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label}>
          <span className={s.text__email}>Email</span>

          <input
            className={s.input}
            type="email"
            name="email"
            value={params.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={s.label}>
          <span className={s.text__password}>Password</span>

          <input
            className={s.input}
            type="password"
            name="password"
            value={params.password}
            onChange={handleChange}
            pattern=".{7,}"
            title="At least 7 characters in length"
            required
          />
        </label>
        <button className={s.btn} type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Accept'}
        </button>
      </form>
    </main>
  );
}
